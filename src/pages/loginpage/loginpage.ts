import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice : Loginservice, public loadingmodal: LoadingModal,public menu: MenuController ) {
  }
  user={};
  response:any;
  loginError:string;
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Loginpage');
    this.menu.swipeEnable(false, 'CategoriesMenu');
  }
  login(){
  this.navCtrl.setRoot(HomePage);
  /*this.loadingmodal.showModal();
  	console.log("inside Login");
    console.log(JSON.stringify(this.user));
  	this.loginservice.doLogin(this.user).subscribe(
     data => this.gotoHome(data),err => this.loginErrorHandler(err.json()));*/
   
  }

  gotoHome(data){

    this.loadingmodal.hideModal();
    console.log(data);
    this.navCtrl.setRoot(HomePage);
  }

  loginErrorHandler(err)
  {
    this.loadingmodal.hideModal();
    console.log(err.message)
     if(err.message)
      this.loginError=err.message
  }

}
