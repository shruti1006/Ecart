import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the LoadingModal component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'loading-modal',
  templateUrl: 'loading-modal.html',
  providers:[]
})
export class LoadingModal {

  text: string;
  loader: any;

  constructor( public loadingCtrl: LoadingController ) {
    console.log('Hello LoadingModal Component');
    this.text = 'Hello World';
    this.loader=this.loadingCtrl.create({
    content: 'Please wait...'
  	});
  }

  showModal()
  {
  	//alert("test show modal");
  	this.loader.present();
  }

  hideModal()
  {
  	//alert("hide modal");
  	this.loader.dismiss();
  }

}
