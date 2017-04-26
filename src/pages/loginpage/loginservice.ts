import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Loginservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loginservice {

  constructor(public http: Http) {
    console.log('Hello Loginservice Provider');
  }

  doLogin(){
  console.log("doLogin");
  }

}
