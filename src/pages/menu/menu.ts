import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, Loading, ModalController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import { RestaurantMenu } from '../../models/restaurant-menu';
import { RestaurantCategory } from '../../models/restaurant-categories';
import { MenuView } from '../../modals/menu/menu-view'

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})

export class MenuPage implements OnInit {
    restaurantId: number = 1;
    menuCategories: RestaurantCategory[];
    specialCategories: String[];
    constructor(private restaurantService: RestaurantService, 
        public alertCtrl: AlertController,
        protected modalCtrl: ModalController,
        protected loadingCtrl?: LoadingController) {

    }

    ngOnInit() {
        let loading: Loading = this.showLoading("Loading...");
        this.restaurantService.
            getMenuCategories(this.restaurantId)
            .then(cats => this.prepareMenucategories(cats, loading));
        this.restaurantService.getSpecialMenuCategories(this.restaurantId)
        .then(specialCats => this.specialCategories = specialCats);
    }

    prepareMenucategories(menuCategories: RestaurantCategory[], loading: Loading ) {
        this.menuCategories = menuCategories;
        loading.dismiss()
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

    getCategoriesNames(): String[] {
        var categories = [];
        this.menuCategories.forEach(item => categories.push(item.name));
        return categories;
    }

    openMenu(selected: String) {
        let showMenuModal = this.modalCtrl.create(MenuView, { 
            categories: this.getCategoriesNames(),
            selected: selected,
            id: this.restaurantId
        });

        showMenuModal.onDidDismiss(data => {
        });
        
        showMenuModal.present();
    }
}
