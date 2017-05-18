import { Injectable } from '@angular/core';
import { Http,Headers,Response} from '@angular/http';
import 'rxjs/add/operator/map';

import { AppService } from './app-service';
import { Storage } from '@ionic/storage';



/*
  Generated class for the CartService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartService {

public token:string;

  constructor(public http: Http, public appServ: AppService, public storage:Storage) {
    console.log('Hello CartService Provider');
    storage.ready().then(() => {

       //to get a token
       storage.get('token').then((val) => {
         this.token=val;
         console.log("this.token="+this.token);
       })
     });
  }

  addToCart(item,cartId,token)
  {

  	var url=this.appServ.AppUrl+this.appServ.AddtoCartUrl;
  	console.log("addtocart url="+url);
  	var Authtoken="Bearer "+token;
  	console.log("addtocart url="+url+", token="+Authtoken);

  	var headers = new Headers();
  	headers.append('Content-Type', 'application/json');
    headers.append('Authorization', Authtoken);

    var data={
	    "cartItem":{
	    	"product_option":{
	    		"extension_attributes":{
	    			"configurable_item_options":[]
	    			}
	    	},
	    	"qty":1,
	    	"quote_id":cartId,
	    	"sku":item.sku
	    }
    }

  	return this.http.post(url,data,{headers:headers,method:'POST'}).map((res: Response) => res.json());

  }

  getCartId(tk){  	
  
  	var aToken=tk;
  	var url=this.appServ.AppUrl+this.appServ.CartDetailsUrl;
  	var Authtoken="Bearer "+aToken;
	console.log("getCartId url="+url+", token="+Authtoken);
	var headers = new Headers();
	//headers.append('Content-Type', 'application/json');
	headers.append('Authorization', Authtoken);
	return this.http.post(url,'',{headers:headers,method:'POST'}).map((res: Response) => res.json());

   }

   getCartItemCount(tk){  	
  
  	var aToken=tk;
  	var url=this.appServ.AppUrl+this.appServ.CartDetailsUrl;
  	var Authtoken="Bearer "+aToken;
	console.log("getCartId url="+url+", token="+Authtoken);
	var headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', Authtoken);
	return this.http.get(url,{headers:headers,method:'GET'}).map((res: Response) => res.json());

   }

   getCartItems(token){

   	var url=this.appServ.AppUrl+this.appServ.GetCartItemsUrl;
  	var Authtoken="Bearer "+token;
	console.log("getCartId url="+url+", token="+Authtoken);
	var headers = new Headers();
	headers.append('Content-Type', 'application/json');
	headers.append('Authorization', Authtoken);
	return this.http.get(url,{headers:headers,method:'GET'}).map((res: Response) => res.json());

   }

   getShippingAddress(token){

		var url=this.appServ.AppUrl+this.appServ.GetShpAddressUrl;
	  	var Authtoken="Bearer "+token;
		console.log("getCartId url="+url+", token="+Authtoken);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', Authtoken);
		return this.http.get(url,{headers:headers,method:'GET'}).map((res: Response) => res.json());

   }

   getBillingAddress(token){

		var url=this.appServ.AppUrl+this.appServ.GetBilAddressUrl;
	  	var Authtoken="Bearer "+token;
		console.log("getCartId url="+url+", token="+Authtoken);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', Authtoken);
		return this.http.get(url,{headers:headers,method:'GET'}).map((res: Response) => res.json());

   }

   getShippingMethod(token,AddressId){

   		var url=this.appServ.AppUrl+this.appServ.GetShpMethodUrl;
	  	var Authtoken="Bearer "+token;
		console.log("getCartId url="+url+", token="+Authtoken);
		var headers = new Headers();
		var cred={"addressId":AddressId}
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', Authtoken);
		return this.http.post(url,cred,{headers:headers,method:'POST'}).map((res: Response) => res.json());

   }
   getShippingInfo(Data,token){

   		var url=this.appServ.AppUrl+this.appServ.GetShpInfoUrl;
	  	var Authtoken="Bearer "+token;
		console.log("getCartId url="+url+", token="+Authtoken);
		var headers = new Headers();
		var cred=Data;
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', Authtoken);
		return this.http.post(url,cred,{headers:headers,method:'POST'}).map((res: Response) => res.json());

   }

   completeCheckout(token,data){

   		var url=this.appServ.AppUrl+this.appServ.checkoutUrl;
	  	var Authtoken="Bearer "+token;
		console.log("getCartId url="+url+", token="+Authtoken);
		var headers = new Headers();
		var cred=data;
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', Authtoken);
		return this.http.post(url,cred,{headers:headers,method:'POST'}).map((res: Response) => res.json());

   }

  updateItemQuantity(token,data){

   		var url=this.appServ.AppUrl+this.appServ.UpdateCartItem+data.item_id;
	  	var Authtoken="Bearer "+token;
		console.log("updateItemQuantity url="+url+", token="+Authtoken);
		var headers = new Headers();
		var cred=  {"cartItem":{
						"product_option":{
							"extension_attributes": 
							 	{"configurable_item_options": []
							 }
						},
					"qty": data.qty,
					"quote_id": data.quote_id,
					"sku":data.sku
					}}

		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', Authtoken);
		return this.http.put(url,cred,{headers:headers,method:'PUT'}).map((res: Response) => res.json());

   }

   deleteFromCart(token,id){

   		var url=this.appServ.AppUrl+this.appServ.DeleteCartItem+id;
	  	var Authtoken="Bearer "+token;
		console.log("deleteFromCart url="+url+", token="+Authtoken);
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', Authtoken);
		return this.http.delete(url,{headers:headers,method:'DELETE'}).map((res: Response) => res.json());

   }

}
