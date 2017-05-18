import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the CheckoutComplete page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkout-complete',
  templateUrl: 'checkout-complete.html',
})
export class CheckoutComplete {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutComplete');
  }

  gotoHome(){

  	this.navCtrl.setRoot(HomePage);
  }

}
