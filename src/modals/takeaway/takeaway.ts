import { Component, OnInit } from '@angular/core';
import { ViewController, LoadingController, Loading } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { RestaurantService } from '../../providers/restaurant-service';
import { TakeAwayCategory } from '../../models/take-away-cat'; 

@Component({
  selector: 'takeaway',
  templateUrl: 'takeaway.html'
})

export class TAMenuModal implements OnInit {
    sections: TakeAwayCategory[];

    constructor(private viewCtrl: ViewController, private service: RestaurantService,
        protected loadingCtrl?: LoadingController) {
      
    }

    ngOnInit() {
      let loading: Loading = this.showLoading("Loading...");
      this.service.getTakeAwayMenu(1).then((data => this.processTakeAwayMenu(data, loading)));
    }

    processTakeAwayMenu(data: TakeAwayCategory[], loading: Loading) {
      this.sections = data;
      loading.dismiss();
    }

    showLoading(content: string): Loading {
        if (this.loadingCtrl) {
            let loading = this.loadingCtrl.create({
                content: content
            });
            loading.present();
            return loading;
        }
    }

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }
}