import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartService } from '../../providers/cart-service';
import { CheckoutComplete } from '../checkout-complete/checkout-complete';
import { AppService } from '../../providers/app-service';
import { NetworkService } from '../../providers/network-service';
import { LoadingModal } from '../../components/loading-modal/loading-modal';



/**
 * Generated class for the Checkoutpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkoutpage',
  templateUrl: 'checkoutpage.html',
})
export class Checkoutpage {

	public currentInfo:any;
	public totals:any;
	public paymentMethods:any;
	public billAddress:any;
	public payM:any;
  public netErr: string;
  public serviceErr: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,public cartServ:CartService, public toastCtrl: ToastController,public appServ: AppService, public netServ: NetworkService,public loader: LoadingModal) {

  		this.currentInfo=navParams.get("shippingInfo");
  		this.totals=this.currentInfo.totals.total_segments;
  		this.billAddress=navParams.get("billingAddress");
  		this.paymentMethods=this.currentInfo.payment_methods;
      this.netErr=appServ.NetErrorMessage;
      this.serviceErr=appServ.ServiceErrorMessage;
  }

  ionViewDidLoad() {

  }

  gotoPayement()
  {
  		var data={
  			"billingAddress":{
  				"city":this.billAddress.city,
  				"company":this.billAddress.company,
  				"country_id":this.billAddress.country_id,
  				"firstname":this.billAddress.firstname,
  				"id":this.billAddress.id,
  				"lastname":this.billAddress.lastname,
  				"postcode":this.billAddress.postcode,
  				"region":this.billAddress.region.region,
  				"region_code":this.billAddress.region.region_code,
  				"region_id":this.billAddress.region.region_id,
  				"same_as_billing":0,
  				"street":this.billAddress.street,
  				"telephone":this.billAddress.telephone
  				},
  			"paymentMethod":{
  				"method":this.paymentMethods[this.payM].code
  				}
			}
			console.log(data);

			 this.storage.get('token').then((val) => {

			      var token=val;
            if(this.netServ.checkConnection())
            {
               this.loader.showModal();
  			       this.cartServ.completeCheckout(token,data).subscribe(data=>{
  			             console.log(data);
  			             if(data)
  			             {
                      this.loader.hideModal();
                      setTimeout(()=>{
                      this.navCtrl.push(CheckoutComplete);

                      },100);
  			             	
  			             }
  			           
  			       },err=>{
               this.loader.hideModal();
                this.presentToast(this.serviceErr);
               });
            }
            else
               this.presentToast(this.netErr);


			});

  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
