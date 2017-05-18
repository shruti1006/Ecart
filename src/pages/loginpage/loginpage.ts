import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController} from 'ionic-angular';
import { Loginservice } from '../../providers/loginservice';
import { HomePage } from '../home/home';
import { LoadingModal } from '../../components/loading-modal/loading-modal';
import { Storage } from '@ionic/storage';
import { AppService } from '../../providers/app-service';
import { NetworkService } from '../../providers/network-service';



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

  user={};
  response:any;
  loginError:string;
  public netErr: string;
  public serviceErr: string;


  constructor(public navCtrl: NavController, public navParams: NavParams,public loginservice : Loginservice, public loadingmodal: LoadingModal,public menu: MenuController,public storage: Storage, public toastCtrl: ToastController,public appServ: AppService, public netServ: NetworkService) {

    this.netErr=appServ.NetErrorMessage;
    this.serviceErr=appServ.ServiceErrorMessage;

  }
 
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Loginpage');
    this.menu.swipeEnable(false, 'CategoriesMenu');
  }
  login(){
 // this.navCtrl.setRoot(HomePage);
  	console.log("inside Login");
    console.log(JSON.stringify(this.user));
    if(this.netServ.checkConnection())
    {
        this.loadingmodal.showModal();

        this.loginservice.doLogin(this.user).subscribe(
           data => this.gotoHome(data),err => this.loginErrorHandler(err.json()));
    }
    else
      this.presentToast(this.netErr);

  	
   
  }

  gotoHome(data){

    this.loadingmodal.hideModal();
    this.storage.set('token',data);
    this.navCtrl.setRoot(HomePage);
   
    
  }

  loginErrorHandler(err)
  {
    this.loadingmodal.hideModal();
    console.log(err.message)
     if(err.message)
      this.loginError=err.message


  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
