import { Component } from '@angular/core';
import { NavParams, ViewController, LoadingController, Loading} from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import { RestaurantMenuItem } from '../../models/restaurant-menu-item';

@Component({
  selector: 'menu-view',
  templateUrl: 'menu-view.html'
})

export class MenuView  {
    categories: string[];
    selected: string;
    selectedIndex: number = -1;
    menu: RestaurantMenuItem[] = [];
    restaurantId: number;

    constructor(private navParams: NavParams, 
                private viewCtrl: ViewController,
                private restaurantService: RestaurantService,
                private loadingCtrl: LoadingController) {
      this.categories = navParams.get('categories');
      this.selected = navParams.get('selected');
      this.restaurantId = navParams.get('id');
      this.selectedIndex = this.categories.indexOf(this.selected);
      this.refreshData();
    }

    refreshData(): void {
      this.menu = [];
      this.selected = this.categories[this.selectedIndex];
      var loading = this.showLoading("Loading...");
      this.restaurantService.getMenu(this.restaurantId, this.selected).
          then(items => this.consumeMenuItems(items, loading));
    }

    consumeMenuItems(items: RestaurantMenuItem[], loading: Loading) {
        this.menu = items;
        loading.dismiss();
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

    isLeftEnd(): boolean {
      return this.selectedIndex === 0;
    }

    isRightEnd(): boolean {
      return this.selectedIndex === (this.categories.length - 1);
    }

    goPrev(): void {
      this.selectedIndex--;
      this.refreshData();
    }

    goNext(): void {
      this.selectedIndex++;
      this.refreshData();
    }

}