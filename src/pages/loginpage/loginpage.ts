import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Loginservice } from '../../providers/loginservice';
import { HomePage } from '../home/home';
import { LoadingModal } from '../../components/loading-modal/loading-modal';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice : Loginservice, public loadingmodal: LoadingModal ) {
  }
  user={};
  response:any;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Loginpage');
  }
  login(){
  this.navCtrl.setRoot(HomePage);
  /*this.loadingmodal.showModal();
  	console.log("inside Login");
    console.log(JSON.stringify(this.user));
  	this.loginservice.doLogin(this.user).subscribe(
     data => this.gotoHome(data));*/
   
  }

  gotoHome(data){
  console.log("inside gotoHome");
  console.log(data);

      if(data)
      {
       this.loadingmodal.hideModal();

        this.navCtrl.setRoot(HomePage);
      }


  }

}
