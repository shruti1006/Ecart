import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Checkoutpage } from '../checkoutpage/checkoutpage';
import { Storage } from '@ionic/storage';
import { CartService } from '../../providers/cart-service';
import { LoadingModal } from '../../components/loading-modal/loading-modal';


/**
 * Generated class for the ShippingAddressPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shipping-address-page',
  templateUrl: 'shipping-address-page.html',
})
export class ShippingAddressPage {

public shippingAddress:any={};
public shippingMethod=[];
public billingAddress:any={};
public authToken:any;
public shippingInfo:any={};
public shpMethod:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,public cartServ: CartService,public loader :LoadingModal) {


   loader.showModal();
   storage.get('token').then((val) => {

      var token=val;
      this.authToken=val;
       cartServ.getShippingAddress(token).subscribe(data=>{
             console.log(data);
             this.shippingAddress=data;
             cartServ.getShippingMethod(token,this.shippingAddress.id).subscribe(data=>{
             	console.log(data);
            	this.shippingMethod=data;
      		 });
       });

       cartServ.getBillingAddress(token).subscribe(data=>{
              console.log(data);
              this.billingAddress=data;
              loader.hideModal();
            
       });

       

      

    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShippingAddressPage');
  }

  gotoPayement(){
  console.log("this.shpMethod=="+this.shpMethod);
  console.log("carriercode="+this.shippingMethod[this.shpMethod].carrier_code)
  console.log("method_code="+this.shippingMethod[this.shpMethod].method_code)

  this.loader.showModal();
  	var address={
  		"addressInformation":{
  			"billing_address":{
  				"city":this.billingAddress.city,
  				"company":this.billingAddress.company,
  				"country_id":this.billingAddress.country_id,
  				"firstname":this.billingAddress.firstname,
  				"lastname":this.billingAddress.lastname,
  				"postcode":this.billingAddress.postcode,
  				"region":this.billingAddress.region.region,
  				"region_code":this.billingAddress.region.region_code,
  				"region_id":this.billingAddress.region.region_id,
  				"street":this.billingAddress.street,
  				"telephone":this.billingAddress.telephone
  			},
  			"shipping_address":{
  				"city":this.shippingAddress.city,
  				"company":this.shippingAddress.company,
  				"country_id":this.shippingAddress.country_id,
  				"firstname":this.shippingAddress.firstname,
  				"lastname":this.shippingAddress.lastname,
  				"postcode":this.shippingAddress.postcode,
  				"region":this.shippingAddress.region.region,
  				"region_code":this.shippingAddress.region.region_code,
  				"region_id":this.shippingAddress.region.region_id,
  				"street":this.shippingAddress.street,
  				"telephone":this.shippingAddress.telephone
  			},
  			"shipping_carrier_code":this.shippingMethod[this.shpMethod].carrier_code,
  			"shipping_method_code":this.shippingMethod[this.shpMethod].method_code
  		}
  	}

  	 this.cartServ.getShippingInfo(address, this.authToken).subscribe(data=>{
             console.log(data);
             this.shippingInfo=data;
             this.loader.hideModal();
             this.navCtrl.push(Checkoutpage,{shippingInfo:this.shippingInfo,billingAddress:this.billingAddress});
            
       });

 	 

  }

}
