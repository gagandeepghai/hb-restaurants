import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: 'starratingcomponent.html',
})

export class StarRatingComponent implements OnInit {
    @Input() rating : number;
    @Input() color: boolean = true;
    flags : number[] = [];
    ngOnInit() {
      for (let i = 0; i < 5; ++i) {
        if(this.rating - i == 0.5) {
          this.flags[i] = 0.5;
        } else if(this.rating - i > 0) {
          this.flags[i] = 1;
        } else {
          this.flags[i] = 0;
        }
      }
    }

}
