import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppService {

public AppUrl: string="http://magento2.suyatitech.com/index.php/rest/default/V1/";
public LoginUrl: string="integration/customer/token";
public GetCategories :string="categories";
public GetProducts :string="products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[filter_groups][0][filters][0][value]=";

public ThumbNailUrl: string="http://magento2.suyatitech.com/pub/media/catalog/product";

  constructor(public http: Http) {
    console.log('Hello AppService Provider');
  }

}
