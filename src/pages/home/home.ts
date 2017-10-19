import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component ({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    constructor(public navCtrl: NavController) {

    }

    openHistory() {
        
    }

    openMenu() {
        this.navCtrl.parent.select(1); 
    }

    openDetails() {
        this.navCtrl.parent.select(2); 
    }

    openAccount() {
        this.navCtrl.parent.select(3); 
    }
}
