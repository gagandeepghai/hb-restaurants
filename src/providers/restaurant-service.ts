import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RestaurantDetail } from '../models/restaurant-detail';
import { RestaurantCategory } from '../models/restaurant-categories';
import { RestaurantSpecialCategory } from '../models/restaurant-sp-cat';
import { RestaurantMenuItem } from '../models/restaurant-menu-item';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService {
    private baseUrl = 'api/';
    private detailsResourceLocator = 'details/'
    private menuResourceLocator = 'menus/';
    private menuCategoriesResourceLocator = "/categories"
    constructor(private http: Http) { }

    // getRestaurantDetails(id: number): Promise<RestaurantDetail> {
    //     return this.http.get(this.baseUrl + this.detailsResourceLocator + 1)
    //             .toPromise()
    //             .then(response => response.json().data as RestaurantDetail)
    //             .catch(this.handleError);
    // }

    getMenuCategories(id: number) : Promise<RestaurantCategory[]> {
        return this.http.get(this.baseUrl +this.menuResourceLocator + id)
                .toPromise()
                .then(response => response.json().data.categories as RestaurantCategory[])
                .catch(this.handleError);
    }

    getSpecialMenuCategories(id: number) : Promise<RestaurantSpecialCategory[]> {
        return this.http.get(this.baseUrl +this.menuResourceLocator + id)
                .toPromise()
                .then(response => response.json().data.specialCategories as RestaurantSpecialCategory[])
                .catch(this.handleError);
    }

    getMenu(id: number, category: string) : Promise<RestaurantMenuItem[]> {
        return this.http.get(this.baseUrl + this.menuResourceLocator + id)
                .toPromise()
                .then(response => response.json().data.items as RestaurantMenuItem[])
                .catch(this.handleError);
    }

    // getRestaurantDetailsByName(name: String): Promise<RestaurantDetail> {
    //     return this.http.get(this.baseUrl + this.detailsResourceLocator + 1)
    //             .toPromise()
    //             .then(response => response.json().data as RestaurantDetail)
    //             .catch(this.handleError);
    // }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}