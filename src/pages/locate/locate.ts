import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { ModalController, AlertController } from 'ionic-angular';
import { PhotosSlideShow } from '../../modals/gallery/gallery';
import { EmailComposer } from '@ionic-native/email-composer';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component ({
    selector: 'page-locate',
    templateUrl: 'locate.html'
})

export class LocatePage {
    emailId:string = "punjaabs@gmail.com";

    constructor(
        protected modalCtrl: ModalController,
        private callNumber: CallNumber,
        public alertCtrl: AlertController,
        private emailComposer: EmailComposer,
        private iab: InAppBrowser) { 

    }

    call() {
        let confirm = this.alertCtrl.create({
            title: 'Call Punjaabs',
            message: '+61 2 8964 3389',
            buttons: [
                {
                text: 'Cancel',
                handler: () => {}
                },
                {
                text: 'Ok',
                handler: () => {
                        this.callNumber.callNumber("+61289643389", true)
                        .then(() => console.log('Launched dialer!'))
                        .catch(() => console.log('Error launching dialer'));
                    }
                }
            ]
            });
            confirm.present();
    }

    map() {
        console.log("MAP");
    }

    email() {
        let email = {
            to: this.emailId
        };
        this.emailComposer.open(email);
    }

    open(type: String) {
        let browser = null;
        console.log("TYPE: " +type);
        if(type == "fb") {
            browser = this.iab.create('https://www.facebook.com/punjaabscrowsnest/');
        } else if(type == "ta") {
            browser = this.iab.create('https://www.tripadvisor.com/Restaurant_Review-g552091-d12677408-Reviews-Punj_Aab_s-Crows_Nest_North_Sydney_Greater_Sydney_New_South_Wales.html');
        } else if(type == "zo") {
            browser = this.iab.create('https://www.zomato.com/sydney/punj-aabs-crows-nest');
        }
        if(browser) {
            browser.show();
        }
    }

    photos() {
        let showMenuModal = this.modalCtrl.create(PhotosSlideShow);

        showMenuModal.onDidDismiss(data => {
        });
        
        showMenuModal.present();
    }
}
