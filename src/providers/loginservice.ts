import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions} from '@angular/http';
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
 	 	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });


 	 var data ={"username":"snair@suyati.com",password:"123456"};
  	 var url="http://magento2.suyatitech.com/index.php/rest/default/V1/integration/customer/token";


	 this.http.post(url, data, options)
        .subscribe(data => {
        console.log(data.json())
           
        }, error => {
            console.log(JSON.stringify(error.json()));
        });
  }

}
