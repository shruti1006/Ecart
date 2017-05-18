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
    this.text = 'Hello World';
    
  }

  showModal()
  {
    this.loader=this.loadingCtrl.create({
    content: 'Please wait...'
    });
  	this.loader.present();
  }

  hideModal()
  {
  	//alert("hide modal");
  	this.loader.dismiss().catch(() => {});
  }

}
