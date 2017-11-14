import { ViewController, ToastController, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';
import { UserService } from '../../../providers/user-service';

@Component ({
    selector: 'forgot-login',
    templateUrl: 'forgot.html'
})

export class ForgotPasswordPage {
    resetEmail: String;
    constructor(public viewCtrl: ViewController, public alertCtrl: AlertController, public toastCtrl: ToastController) {

    }

    cancel() {
        this.viewCtrl.dismiss();
    }

    send() {
        if(this.resetEmail) {
            this.viewCtrl.dismiss({done: true});
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
