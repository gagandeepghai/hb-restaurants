import { Component, Input, OnInit } from '@angular/core';
import { RestaurantMenuItem } from '../../../models/restaurant-menu-item'

@Component({
  selector: 'menu-item-card',
  templateUrl: 'item-card.html'
})

export class ItemCardComponent implements OnInit{
  @Input() item: RestaurantMenuItem;
  ngOnInit() {  
    if(this.item.description && this.item.description.length > 150) {
        this.item.description = this.item.description.substring(0, 150)+ '...';
    }
    //hack
    if(!this.item.likes) {
      this.item.likes = Math.floor(Math.random() * 100);
    }

    if(this.item.spicelevel < 3) {
      this.item.badges.push('MILD');
    } else if(this.item.spicelevel == 3) {
      this.item.badges.push('MEDIUM');
    } else {
      this.item.badges.push('SPICY');
    }
  }
}
