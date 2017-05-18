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

public GetSearchProducts :string="products?searchCriteria[filter_groups][0][filters][0][field]=name&searchCriteria[filter_groups][0][filters][0][condition_type]=like&searchCriteria[filter_groups][0][filters][0][value]=";

public LogoutUrl :string="customer/logout";

public AddtoCartUrl: string="carts/mine/items";

public CartDetailsUrl: string="carts/mine";

public GetCartItemsUrl: string="carts/mine/items";

public GetShpAddressUrl: string="customers/me/shippingAddress";

public GetBilAddressUrl: string="customers/me/billingAddress";

public GetShpMethodUrl: string="carts/mine/estimate-shipping-methods-by-address-id";

public GetShpInfoUrl: string="carts/mine/shipping-information";

public checkoutUrl: string="carts/mine/payment-information";

public ThumbNailUrl: string="http://magento2.suyatitech.com/pub/media/catalog/product";

public UpdateCartItem: string='carts/mine/items/';

public DeleteCartItem: string='carts/mine/items/';

public NetErrorMessage="No Internet Connection.";

public ServiceErrorMessage="Oops, something seems to be wrong, Please try again after some time."

  constructor(public http: Http) {
    console.log('Hello AppService Provider');
  }

}
