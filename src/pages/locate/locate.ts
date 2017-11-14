import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { ModalController } from 'ionic-angular';
import { PhotosSlideShow } from '../../modals/gallery/gallery';

@Component ({
    selector: 'page-locate',
    templateUrl: 'locate.html'
})

export class LocatePage {
    constructor(
        protected modalCtrl: ModalController,
        private callNumber: CallNumber) { 

    }

    call() {
        this.callNumber.callNumber("+61289643389", true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
    }

    map() {
        console.log("MAP");
    }

    email() {
        console.log("EMAIL");
    }

    open(type: String) {
        console.log("OPEN: " +type);
    }

    photos() {
        let showMenuModal = this.modalCtrl.create(PhotosSlideShow);

        showMenuModal.onDidDismiss(data => {
        });
        
        showMenuModal.present();
    }
}
