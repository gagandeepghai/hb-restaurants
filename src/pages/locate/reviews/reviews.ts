import { Component, OnInit } from '@angular/core';
import { Review }  from '../../../models/review';
import { RestaurantService } from '../../../providers/restaurant-service';

@Component ({
    selector: 'res-reviews',
    templateUrl: 'reviews.html'
})

export class ReviewsComponent implements OnInit {
    restaurantId: number = 1;
    reviews: Review[] = [];
    haveMore = false;
    constructor(private restaurantService: RestaurantService) {

    }

    ngOnInit() {
        this.restaurantService.getReviews(this.restaurantId)
            .then(data => this.consumeReviews(data));
    }

    consumeReviews(reviews: Review[]) {
        if(reviews.length > 3) {
            this.haveMore = true;
        }
        // this.reviews = reviews.slice(0, 3);
    }
}
