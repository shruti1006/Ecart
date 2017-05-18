import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProductService } from '../../providers/product-service';
import { AppService } from '../../providers/app-service';
import { LoadingModal } from '../../components/loading-modal/loading-modal';
import { ProductDescription } from '../product-description/product-description';
import { CartService } from '../../providers/cart-service';
import { Storage } from '@ionic/storage';
import { Cartpage } from '../cartpage/cartpage';
import { SearchPage } from '../search-page/search-page';


/**
 * Generated class for the ProductCatalog page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-catalog',
  templateUrl: 'product-catalog.html',
})
export class ProductCatalog {

public currentCatId:any;
public productArray=[];
public imageBaseUrl:string;
public pageNumber:number=1;
public continue:boolean=true;
public totalCount:number;
public cartCount:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public prdServ: ProductService,public appService:AppService, public loaderService: LoadingModal, public cartServ: CartService,public storage: Storage) {

      console.log("inside constructor");
      storage.get('token').then((val) => {

          var token=val;
          cartServ.getCartItemCount(token).subscribe(data=>{
             this.cartCount=data.items_count;
          });

       });
  	  
  }

  loadDescription(product){
  var p=product;

  this.navCtrl.push(ProductDescription,{product:p});

  }

  ionViewDidLoad() {
      console.log("view did load");
      this.imageBaseUrl=this.appService.ThumbNailUrl
      this.currentCatId=this.navParams.get("catId");
      this.loaderService.showModal();
      this.prdServ.getProductsforCategory(this.currentCatId,this.pageNumber).subscribe(data => {

        this.productArray=data.items;
        this.totalCount=data.total_count;
         this.loaderService.hideModal();      
      
      });
  }
  doInfinite(event)
  {
     console.log("inside doInfinite");
     this.pageNumber++;
     console.log("productArray.length="+this.productArray.length+" ,total_count=="+this.totalCount);
      if(this.productArray.length==this.totalCount)
      {
        console.log("inaide if");
        event.enable(false);
      }
      else
      {
        this.prdServ.getProductsforCategory(this.currentCatId,this.pageNumber).subscribe(data => {

          for(var i=0;i<data.items.length;i++)
          {
            this.productArray.push(data.items[i]);
          }
          
          console.log(this.productArray);                                   
          event.complete();
             
      
      });
      }
     
  }

   loadCart(){

    this.navCtrl.push(Cartpage);
  }

  gotoSearch(){

      this.navCtrl.push(SearchPage);
  }

}
