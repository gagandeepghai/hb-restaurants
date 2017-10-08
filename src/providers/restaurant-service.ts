import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RestaurantDetail } from '../models/restaurant-detail';
import { RestaurantMenu } from '../models/restaurant-menu'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class RestaurantService {
    private baseUrl = 'api/';
    private detailsResourceLocator = 'details/'
    private menuResourceLocator = 'menus/'
    constructor(private http: Http) { }

    // getRestaurantDetails(id: number): Promise<RestaurantDetail> {
    //     return this.http.get(this.baseUrl + this.detailsResourceLocator + 1)
    //             .toPromise()
    //             .then(response => response.json().data as RestaurantDetail)
    //             .catch(this.handleError);
    // }

    getMenu(id: number) : Promise<RestaurantMenu> {
        return this.http.get(this.baseUrl + this.menuResourceLocator + 1)
                .toPromise()
                .then(response => response.json().data as RestaurantMenu)
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

    // getReservationTimeSlots(name: String): Promise<String[]> {
    //     let timeSlots: String[] = [];
    //     let times = ["00", "20", "40"];
    //     let hourNow: number = 9;
    //     for (var i = hourNow + 1; i < 24; i++) {
    //         for (var j = 0; j < times.length; j++) {
    //             timeSlots.push(i + ":" + times[j]);
    //         }
    //     }

    //     return Promise.resolve(timeSlots);
    // }
}