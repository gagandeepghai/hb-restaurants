import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
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
                private callNumber: CallNumber) {
      
    }

    call() {
        this.callNumber.callNumber("+61289643389", true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
    }

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }
}