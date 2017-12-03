import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { UserService } from '../../../providers/user-service';
import { UserReward } from '../../../models/user-reward';

@Component({
  selector: 'rewards',
  templateUrl: 'rewards.html'
})

export class UserRewardsModal implements OnInit {
    rewards: UserReward[] = [];
    constructor(private viewCtrl: ViewController,
                private userService: UserService) {
      
    }

    ngOnInit() {
        this.userService.getRewards().then(data => this.rewards = data);
    }

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }
}