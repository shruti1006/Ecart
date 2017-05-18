import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Network } from '@ionic-native/network';

import 'rxjs/add/operator/map';


/*
  Generated class for the NetworkService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NetworkService {

  constructor(public http: Http,public network: Network) {
    console.log('Hello NetworkService Provider');
  }

  checkConnection(){

  	if(this.network.type==="unknown" || this.network.type==="none")
  		return false;
  	else
  	  	return true;
  }

}
