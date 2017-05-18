import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService } from '../../providers/app-service';
import { CartService } from '../../providers/cart-service';
import { Storage } from '@ionic/storage';
import { Cartpage } from '../cartpage/cartpage';
import { SearchPage } from '../search-page/search-page';
import { LoadingModal } from '../../components/loading-modal/loading-modal';






/**
 * Generated class for the ProductDescription page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-description',
  templateUrl: 'product-description.html',
})
export class ProductDescription {

public currentProduct={};
public imageBaseUrl:string;
public cartId:string;
public token:string;
public cartCount:number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appservice : AppService,
  public cartServ: CartService, public storage: Storage, public loader: LoadingModal) {

  	this.currentProduct=navParams.get("product");
  	this.imageBaseUrl=appservice.ThumbNailUrl;
    this.getCartCount();
   
   

  	this.formatProduct(this.currentProduct);

  }

  getCartCount(){

    this.storage.get('token').then((val) => {

        var token=val;
         this.cartServ.getCartId(token).subscribe(data=>{
              console.log(data);
              this.cartId=data;
         });

              
         this.cartServ.getCartItemCount(token).subscribe(data=>{
              console.log(data);
              this.cartCount=data.items_count;
         });

    });


  }

  formatProduct(Product){

  	for(let attr of Product.custom_attributes){
  		if(attr.attribute_code=='description')
  			this.currentProduct["desc"]=attr.value;
  		else if(attr.attribute_code=='image')
  			this.currentProduct["img"]=attr.value;
  	}
  }

  addItem(item){

  this.loader.showModal();

    var itemToAdd=item;
    console.log("cartId="+this.cartId);
    this.storage.get('token').then((val) => {
         this.token=val;
         console.log("this.token="+this.token);
         this.cartServ.addToCart(itemToAdd,this.cartId,this.token).subscribe(
            data => this.addItemSuccess(data),err => this.addItemError(err.json()));
           })
       
  }

  buyNow(item){

  this.loader.showModal();

  var itemToAdd=item;
    console.log("cartId="+this.cartId);
    this.storage.get('token').then((val) => {
         this.token=val;
         console.log("this.token="+this.token);
         this.cartServ.addToCart(itemToAdd,this.cartId,this.token).subscribe(
            data => this.buyItemSuccess(data),err => this.addItemError(err.json()));;
           })

  }
    

  addItemSuccess(data)
  {
    //alert("addItemSuccess"+JSON.stringify(data));
    console.log(data);
    this.loader.hideModal();
    this.getCartCount();

  }

  buyItemSuccess(data)
  {
    console.log(data);
    this.loader.hideModal();
    this.loadCart();
  }

   addItemError(err)
  {
    console.log(err);
    this.loader.hideModal();
  }

  loadCart(){

    this.navCtrl.push(Cartpage);
  }

  ionViewDidLoad() {
  }

  gotoSearch(){

      this.navCtrl.push(SearchPage);
  }

}
