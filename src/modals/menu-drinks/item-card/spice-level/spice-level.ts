import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spice-level',
  templateUrl: 'spice-level.html',
})

export class SpiceLevel implements OnInit {
    @Input() level : number;
    flags : number[] = [];

    ngOnInit() {
      for (let i = 0; i < 5; ++i) {
        if(this.level - i > 0) {
          this.flags[i] = 1;
        } 
      }
    }

}
