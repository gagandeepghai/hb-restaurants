import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RestaurantDetail } from '../models/restaurant-detail';
import { RestaurantCategory } from '../models/restaurant-categories';
import { RestaurantSpecialCategory } from '../models/restaurant-sp-cat';
import { RestaurantMenuItem } from '../models/restaurant-menu-item';
import { RestaurantDrinksMenu } from '../models/restaurant-menu-drinks';
import { TakeAwayCategory } from '../models/take-away-cat'; 
import { Review } from '../models/review';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService {
    // private baseUrl = 'api/';
    private detailsResourceLocator = 'details/';
    private reviewsResourceLocator = 'restaurants/reviews/';
    private menuResourceLocator = 'menu/';
    private takeawayResourceLocator = 'takeaway/';
    private drinksResourceLocator = 'drinks/';
    private menuCategoriesResourceLocator = "categories/";
    private menuItems = "items/";
    private specialMenu = "special/";
    // private actualBaseUrl = "http://localhost:8080/v1/";
    private actualBaseUrl = "http://restaurants-be.herokuapp.com/v1/";
    constructor(private http: Http) { }

    getMenuCategories(id: number) : Promise<RestaurantCategory[]> {
        let url: string = this.actualBaseUrl +this.menuResourceLocator + this.menuCategoriesResourceLocator + id;
        console.log("URL: " +url);
        return this.http.get(url)
                .toPromise()
                .then(response => response.json().categories as RestaurantCategory[])
                .catch(this.handleError);
    }

    getSpecialMenuCategories(id: number) : Promise<RestaurantSpecialCategory[]> {
        return this.http.get(this.actualBaseUrl +this.menuResourceLocator + this.menuCategoriesResourceLocator + this.specialMenu +  id)
                .toPromise()
                .then(response => response.json().categories as RestaurantSpecialCategory[])
                .catch(this.handleError);
    }

    getMenu(id: number, category: string) : Promise<RestaurantMenuItem[]> {
        let url: string = this.actualBaseUrl +this.menuResourceLocator + this.menuItems + category + '/' + id;
        return this.http.get(url)
                .toPromise()
                .then(response => response.json().items as RestaurantMenuItem[])
                .catch(this.handleError);
    }

    getDrinksMenu(id: number) : Promise<RestaurantDrinksMenu> {
        return this.http.get(this.actualBaseUrl +this.menuResourceLocator + this.drinksResourceLocator + id)
                .toPromise()
                .then(response => response.json() as RestaurantDrinksMenu)
                .catch(this.handleError);
    }

    getTakeAwayMenu(id: number) : Promise<TakeAwayCategory[]> {
        return this.http.get(this.actualBaseUrl +this.menuResourceLocator + this.takeawayResourceLocator + id)
                .toPromise()
                .then(response => response.json().ta as TakeAwayCategory[])
                .catch(this.handleError);
    }

    getReviews(id: number) : Promise<Review[]> {
        return this.http.get(this.actualBaseUrl + this.reviewsResourceLocator + id)
                .toPromise()
                .then(response => response.json().reviews as Review[])
                .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error);
    }
}