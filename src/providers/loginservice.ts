import { Injectable } from '@angular/core';
import { Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { AppService } from './app-service';


/*
  Generated class for the Loginservice provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Loginservice {


  constructor(public http: Http,public appservice :AppService) {
    console.log('Hello Loginservice Provider');

     
  }

  doLogin(user){
  console.log(JSON.stringify(user));

   	 	var url=this.appservice.AppUrl+this.appservice.LoginUrl;
      console.log("Login Url="+url);

 	  var creds = {
 	  "username":user.username,
 	  "password":user.password
 	  };
 	  var headers = new Headers();
  	  headers.append('Content-Type', 'application/json');


	 return this.http.post(url,creds,{headers:headers,method:'POST'}).map((res: Response) => res.json());


  }

}
