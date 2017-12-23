import { Component } from '@angular/core';
import { ViewController, AlertController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { UserService } from '../../../providers/user-service';
import { UserReward } from '../../../models/user-reward';
import { CallNumber } from '@ionic-native/call-number';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reserve',
  templateUrl: 'reserve.html'
})

export class UserReservation {
    constructor(private viewCtrl: ViewController,
                private userService: UserService,
                private callNumber: CallNumber, 
                private alertCtrl: AlertController) {
      
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

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }
}