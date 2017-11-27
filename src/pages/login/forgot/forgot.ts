import { ViewController, LoadingController, ToastController, AlertController, Loading } from 'ionic-angular';
import { Component } from '@angular/core';
import { UserService } from '../../../providers/user-service';

@Component ({
    selector: 'forgot-login',
    templateUrl: 'forgot.html'
})

export class ForgotPasswordPage {
    resetEmail: string;
    constructor(public viewCtrl: ViewController, 
        public alertCtrl: AlertController, 
        private userService: UserService,
        public toastCtrl: ToastController,
        private loadingCtrl: LoadingController,) {

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

    send() {
        if(this.resetEmail) {
            let loading: Loading = this.showLoading("Please wait...");
            this.userService.resetPassword(this.resetEmail)
                .then(() =>  {
                    loading.dismiss();
                    this.viewCtrl.dismiss({done: true});
                });
        } else {
            let alert = this.alertCtrl.create({
                title: 'Reset Password',
                subTitle: 'Please enter email to reset.',
                buttons: ['OK']
            });
            alert.present();
        }
    }
}
