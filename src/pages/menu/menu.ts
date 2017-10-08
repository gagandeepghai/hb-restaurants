import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, Loading } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import { RestaurantMenu } from '../../models/restaurant-menu';

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})

export class MenuPage implements OnInit {
    restaurantId: number = 1;
    menu: RestaurantMenu;
    menuCategories: String[];

    constructor(private restaurantService: RestaurantService, 
        public alertCtrl: AlertController,
        protected loadingCtrl?: LoadingController) {

    }

    ngOnInit() {
        let loading: Loading = this.showLoading("Loading...");
        this.restaurantService.
            getMenu(this.restaurantId)
            .then(menuVar => this.prepareMenu(menuVar, loading));
    }

    prepareMenu(menuVar: RestaurantMenu, loading: Loading ) {
        this.menu = menuVar;
        this.menuCategories = Object.keys(menuVar.menuObject);
        loading.dismiss()
        console.log(JSON.stringify(this.menuCategories));
    }

    public showLoading(content: string): Loading {
        if (this.loadingCtrl) {
            let loading = this.loadingCtrl.create({
                content: content
            });
            loading.present();
            return loading;
        }
    }
}
