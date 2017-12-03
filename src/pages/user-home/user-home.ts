import { Component } from '@angular/core';
import { NavController, LoadingController, ActionSheetController, Loading } from 'ionic-angular';
import { UserService } from '../../providers/user-service';
import { LoginPage } from '../login/login';
import { UserRewardsModal } from './rewards/rewards';
import { UserReservation } from './reserve/reserve';
import { UserProfile } from './profile/profile';

@Component ({
    selector: 'user-home',
    templateUrl: 'user-home.html'
})

export class UserHomePage {

    public constructor(private userService: UserService,
        public actionSheetCtrl: ActionSheetController,
        public navCtrl: NavController,
        private loadingCtrl: LoadingController) {

    }

    logout() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Log Out',
            buttons: [
                {
                    text: 'Confirm',
                    role: 'destructive',
                    handler: () => {
                        this.killSession();
                    }
                },{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                    
                    }
                }
            ]
        });
        actionSheet.present();
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

    promos() {
        this.navCtrl.push(UserRewardsModal);
    }

    reserve() {
        this.navCtrl.push(UserReservation);
    }

    profile() {
        this.navCtrl.push(UserProfile);
    }
    
    killSession() {
        let loading: Loading = this.showLoading("Please wait...");
        this.userService.killSession().then(() => {
            this.navCtrl.setRoot(LoginPage);
            loading.dismiss()
        });
    }
}
