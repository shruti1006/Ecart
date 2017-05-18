import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController} from 'ionic-angular';
import { ShippingAddressPage } from '../shipping-address-page/shipping-address-page';
import { Storage } from '@ionic/storage';
import { CartService } from '../../providers/cart-service';
import { LoadingModal } from '../../components/loading-modal/loading-modal';
import { HomePage } from '../home/home';
import { NetworkService } from '../../providers/network-service';
import { AppService } from '../../providers/app-service';



/**
 * Generated class for the Cartpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cartpage',
  templateUrl: 'cartpage.html',
})
export class Cartpage {

public cartItems=[];
public netErr: string;
public serviceErr: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public cartServ: CartService, public loader: LoadingModal,public alertCtrl:AlertController,public toastCtrl: ToastController,public appServ: AppService, public netServ: NetworkService) {
  
      this.loadCart();
      this.netErr=appServ.NetErrorMessage;
      this.serviceErr=appServ.ServiceErrorMessage;

     
  }


  loadCart(){
      this.storage.get('token').then((val) => {

          var token=val;
          if(this.netServ.checkConnection())
          {
              this.loader.showModal();
              this.cartServ.getCartItems(token).subscribe(data=>{
                    this.cartItems=data;
                    this.loader.hideModal();
               },err=>{
                  this.loader.hideModal();
                  this.presentToast(this.serviceErr);
               });
          }
          else
            this.presentToast(this.netErr);

        });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Cartpage');
  }
  gotoShipping(){
  	this.navCtrl.push(ShippingAddressPage);
  }

  decQuantity(item,index){

    
    console.log(item);
    var data={
      "quote_id":item.quote_id,
      "sku":item.sku,
      "qty":--item.qty,
      "item_id":item.item_id
    }

    this.storage.get('token').then((val) => {

      var token=val;
      if(this.netServ.checkConnection())
      {
        this.loader.showModal();
         this.cartServ.updateItemQuantity(token,data).subscribe(data=>{
               console.log(data);
               this.cartItems[index].qty=data.qty;

              this.loader.hideModal();
         },err=>{
            this.loader.hideModal();
            this.presentToast(this.serviceErr);

         });
      }
      else
        this.presentToast(this.netErr);

    });




  }

  incQuantity(item,index){

    console.log(item);
    var data={
      "quote_id":item.quote_id,
      "sku":item.sku,
      "qty":++item.qty,
      "item_id":item.item_id
    }

    this.storage.get('token').then((val) => {

      var token=val;
      if(this.netServ.checkConnection())
      {
         this.loader.showModal();
         this.cartServ.updateItemQuantity(token,data).subscribe(data=>{
               console.log(data);
               this.cartItems[index].qty=data.qty;
               this.loader.hideModal();
         },err=>{
            this.loader.hideModal();
            this.presentToast(this.serviceErr);
         });
      }
       else
        this.presentToast(this.netErr);

    });



  }

   showConfirm(item) {
    let confirm = this.alertCtrl.create({
      title: 'Remove Item',
      message: 'Are you sure you want to remove this item from the cart?',
      buttons: [
        {
          text: 'CANCEL',
          handler: () => {
            console.log('Disagree clicked');
            confirm.dismiss();
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.deleteProduct(item);
            confirm.dismiss();
          }
        }
      ]
    });
    confirm.present();
  }

  deleteProduct(item){

    var id=item.item_id;
    this.storage.get('token').then((val) => {

      var token=val;
      if(this.netServ.checkConnection())
      {
         this.loader.showModal();
         this.cartServ.deleteFromCart(token,id).subscribe(data=>{
               console.log(data);
               if(data){
                  this.loadCart();
               }
               this.loader.hideModal();

         },err=>{
            this.loader.hideModal();
            this.presentToast(this.serviceErr);
         });
      }
      else
        this.presentToast(this.netErr);

    });

  }

  gotoHome(){

  this.navCtrl.setRoot(HomePage);


  }

   presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
