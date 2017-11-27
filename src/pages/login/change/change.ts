import { ViewController, LoadingController, ToastController, AlertController, Loading, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { UserService } from '../../../providers/user-service';

@Component ({
    selector: 'change-password',
    templateUrl: 'change.html'
})

export class ChangePasswordPage {
    email: String;
    password: string;
    constructor(public viewCtrl: ViewController, 
        private navParams: NavParams,
        public alertCtrl: AlertController, 
        private userService: UserService,
        private loadingCtrl: LoadingController) {
            this.email = this.navParams.get('email');
    }

    cancel() {
        this.viewCtrl.dismiss();
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

    create() {
        if(this.password) {
            let loading: Loading = this.showLoading("Please wait...");
            this.userService.changePassword(this.email, this.password)
                .then(() =>  {
                    loading.dismiss();
                    this.viewCtrl.dismiss({done: true});
                });
        } else {
            let alert = this.alertCtrl.create({
                title: 'Create Password',
                subTitle: 'Please enter password to reset.',
                buttons: ['OK']
            });
            alert.present();
        }
    }
}
