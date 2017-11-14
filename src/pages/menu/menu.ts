import { Component, OnInit } from '@angular/core';
import { LoadingController, AlertController, Loading, ModalController } from 'ionic-angular';
import { RestaurantService } from '../../providers/restaurant-service';
import { RestaurantMenu } from '../../models/restaurant-menu';
import { RestaurantCategory } from '../../models/restaurant-categories';
import { RestaurantSpecialCategory } from '../../models/restaurant-sp-cat';
import { MenuView } from '../../modals/menu/menu-view';
import { MenuViewDrinks } from '../../modals/menu-drinks/menu-view-drinks';
import { BanquetModal } from '../../modals/banquet/banquet';
import { TAMenuModal } from '../../modals/takeaway/takeaway';
import { FoodFactsModal } from '../../modals/facts/facts';

@Component({
    selector: 'page-menu',
    templateUrl: 'menu.html'
})

export class MenuPage implements OnInit {
    restaurantId: number = 1;
    menuCategories: RestaurantCategory[];
    specialCategories: RestaurantSpecialCategory[];
    constructor(private restaurantService: RestaurantService, 
        public alertCtrl: AlertController,
        protected modalCtrl: ModalController,
        protected loadingCtrl?: LoadingController) {

    }

    ngOnInit() {
        let loading: Loading = this.showLoading("Loading...");
        
        this.restaurantService.getMenuCategories(this.restaurantId)
            .then(cats => this.prepareMenucategories(cats, loading));
        
        this.restaurantService.getSpecialMenuCategories(this.restaurantId)
        .then(specialCats => this.specialCategories = specialCats);
    }

    prepareMenucategories(menuCategories: RestaurantCategory[], loading: Loading ) {
        console.log("CATS: " +JSON.stringify(menuCategories));
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

    openSpecialMenu(category: RestaurantSpecialCategory) {
        if(category.name === 'Drinks Menu') {
            let showMenuModal = this.modalCtrl.create(MenuViewDrinks, {
                id: this.restaurantId
            });
            showMenuModal.present();
        } else if(category.name === 'Banquet') {
            let showMenuModal = this.modalCtrl.create(BanquetModal);
            showMenuModal.present();
        } else if(category.name === 'Take Away') {
            let showMenuModal = this.modalCtrl.create(TAMenuModal);
            showMenuModal.present();
        } else if(category.name === 'Food Facts') {
            let showMenuModal = this.modalCtrl.create(FoodFactsModal);
            showMenuModal.present();
        }
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
