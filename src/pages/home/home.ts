import { Component } from '@angular/core';
import { NavController,MenuController,PopoverController,ToastController } from 'ionic-angular';
import { ProductService } from '../../providers/product-service';
import { LoadingModal } from '../../components/loading-modal/loading-modal';
import { AppService } from '../../providers/app-service';
import { PopoverPage } from '../popover-page/popover-page';
import { ProductCatalog } from '../product-catalog/product-catalog';
import { ProductDescription } from '../product-description/product-description';
import { Cartpage } from '../cartpage/cartpage';
import { Loginpage } from '../loginpage/loginpage';
import { SearchPage } from '../search-page/search-page';
import { CartService } from '../../providers/cart-service';
import { Storage } from '@ionic/storage';
import { NetworkService } from '../../providers/network-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public categoriesArray=[];
public displayArray=[];
public imageBaseUrl:string;
public cartCount:string;
public netErr: string;
public serviceErr: string;


  constructor(public navCtrl: NavController,public menu: MenuController, public productService: ProductService, public loaderservice: LoadingModal,public appservice : AppService, public popoverCtrl: PopoverController,public cartServ: CartService,public storage: Storage,public toastCtrl: ToastController,public netServ: NetworkService) {
  		
      loaderservice.showModal();
  		if(this.netServ.checkConnection())
      {
        
        this.productService.getCategories().subscribe(data =>this.formatCategories(data),err =>{
          loaderservice.hideModal();
        });
      }
      else{
        loaderservice.hideModal();
        this.presentToast(this.netErr);
      }

      
  		this.imageBaseUrl=appservice.ThumbNailUrl;
      this.netErr=appservice.NetErrorMessage;
      this.serviceErr=appservice.ServiceErrorMessage;

       storage.get('token').then((val) => {

        var token=val;
        if(this.netServ.checkConnection())
        { 
            cartServ.getCartItemCount(token).subscribe(data=>{
                console.log(data);
                this.cartCount=data.items_count;
           },err => {
            loaderservice.hideModal();
           });
        }
        else{
          loaderservice.hideModal();
          this.presentToast(this.netErr);
        }

    });


  }

  

  formatCategories(categories){

  	var categoryArray=categories.children_data;
  	for(let data of categoryArray) 
  	{
  		if(data.product_count)
  		{
  			var childArray=data.children_data
  			for(let child of childArray)
  			{
  				if(child.product_count)
  				{
  					this.categoriesArray.push({"id":child.id,"categoryName":child.name,"categoryProducts":[]});
  				}
  			}
  		}
		
	}	
	var i=0;

	for(let n of this.categoriesArray)
	{
		this.productService.getProductsforCategory(n.id,1).subscribe(data => {

			n.categoryProducts=data.items.slice(0, 4);
			i++;
			if(i== this.categoriesArray.length)
			{
				this.displayArray=this.categoriesArray;
				this.loaderservice.hideModal();

			}
		})

		
	}
}
 
  openPopover(myEvent){

    	let popover = this.popoverCtrl.create(PopoverPage);
      popover.present({
        ev: myEvent
      });

      popover.onDidDismiss(data => {

          if(data=="logout")
            this.navCtrl.setRoot(Loginpage);
      });
  }
  
  ionViewDidLoad() {
    console.log("inaide home controller view didi load");
    this.menu.swipeEnable(true, 'CategoriesMenu');
    
  }
  ionViewWillEnter(){

    console.log("view appeared");
    this.storage.get('token').then((val) => {

        var token=val;
        this.cartServ.getCartItemCount(token).subscribe(data=>{
             console.log(data);
            this.cartCount=data.items_count;
       });

    });
  }

  loadDescription(product){
    var descProduct=product;
    this.navCtrl.push(ProductDescription,{product:descProduct});
  }

  loadMore(catId){
      var category_id=catId;
  		this.navCtrl.push(ProductCatalog, {catId:category_id});
  }

  loadCart(){

    this.navCtrl.push(Cartpage);
  }

  gotoSearch(){

      this.navCtrl.push(SearchPage);
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
