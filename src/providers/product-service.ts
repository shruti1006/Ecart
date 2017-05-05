import { Injectable } from '@angular/core';
import { Http,Headers,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { AppService } from './app-service';


/*
  Generated class for the ProductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ProductService {

public baseUrl: string;

  constructor(public http: Http,public appservice: AppService) {
    console.log('Hello ProductService Provider');
    this.baseUrl=appservice.AppUrl;
  }

  getCategories(){

 	var url=this.baseUrl+this.appservice.GetCategories;
 	console.log("getCategories Url="+url);
 	 return this.http.get(url).map((res: Response) => res.json());

  }

  getProductsforCategory(id){

  		var url=this.baseUrl+this.appservice.GetProducts+id;
  		console.log("GetProducts URl="+url);
  		return this.http.get(url).map((res:Response) => res.json());
  }

  

}
