import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { HistoryModal } from '../../modals/history/history';
import { StoryModal } from '../../modals/story/story';

@Component ({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage {
    readMore: boolean = false;
    constructor(public navCtrl: NavController,
         protected modalCtrl: ModalController) {

    }

    openHistory() {
        let showHistoryModal = this.modalCtrl.create(HistoryModal);
        showHistoryModal.present();
    }

    openStory() {
        let showStoryModal = this.modalCtrl.create(StoryModal);
        showStoryModal.present();
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
