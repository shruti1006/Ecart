import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popover-page',
  templateUrl: 'popover-page.html',
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,public viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
        this.storage.remove('token');
        this.viewCtrl.dismiss("logout");
    }

}
