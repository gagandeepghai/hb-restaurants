import { Component } from '@angular/core';
import { NavParams, ViewController, LoadingController, Loading} from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import  { RestaurantDrinksMenu } from '../../models/restaurant-menu-drinks';

@Component({
  selector: 'menu-view-drinks',
  templateUrl: 'menu-view-drinks.html'
})

export class MenuViewDrinks  {
    menu: RestaurantDrinksMenu;
    restaurantId: number;
    category: string = 'Drinks';
    drinkCategories: String[] = [];

    constructor(private navParams: NavParams, 
                private viewCtrl: ViewController,
                private restaurantService: RestaurantService,
                private loadingCtrl: LoadingController) {
      this.restaurantId = navParams.get('id');
      this.refreshData();
    }

    refreshData(): void {
      var loading = this.showLoading("Loading...");
      this.restaurantService.getDrinksMenu(this.restaurantId).
          then(menu => this.consumeMenuItems(menu, loading));
    }

    consumeMenuItems(menu: RestaurantDrinksMenu, loading: Loading) {
        console.log("Menu: " +JSON.stringify(menu));
        this.menu = menu;
        this.menu.categories.forEach(category => {
            this.drinkCategories.push(category.name);
        })
        loading.dismiss();
    }

    getClass(category: String) {
        
        if(category.toLowerCase().indexOf("wine") != -1) {
            return 'clr-w';
        } else if (category.toLowerCase().indexOf("Non Alcoholic".toLowerCase()) != -1) {
            return 'clr-s';
        } else {
            return 'clr-a';
        }
    }

    getItems(category: String) {
        var categoryChunk = this.menu.categories.filter(item => item.name == category);
        console.log(JSON.stringify(categoryChunk[0].items));
        return categoryChunk[0].items;
    }

    showLoading(content: string): Loading {
        if (this.loadingCtrl) {
            let loading = this.loadingCtrl.create({
                content: content
            });
            loading.present();
            return loading;
        }
    }

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }

}