import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loginservice } from '../../providers/loginservice';

/**
 * Generated class for the Loginpage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-loginpage',
  templateUrl: 'loginpage.html'
  })
export class Loginpage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice : Loginservice) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Loginpage');
  }
  login(){
  	console.log("inside Login");
  	this.loginservice.doLogin();
  }

}
