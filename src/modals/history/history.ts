import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: 'history.html'
})

export class HistoryModal  {
    snippets: String[] = [];
    constructor(private viewCtrl: ViewController) {
      this.snippets.push('We belong to Punjab the  land of versatility in food and culture. That’s from where comes the name "Punj aab\'s". \nPunjab is located in the north west of India, ' +
                          'is one of the smallest and the most prosperous states of India. The five rivers Sutlej, Beas, Ravi, Chenab and Jhelum gave it its name \'Punj-aab\' or the \'land of five waters\'');
      this.snippets.push('Tandoori food is a Punjabi specialty especially for non-vegetarian dishes. Many of the most popular elements of Indian cuisine as it is marketed to non-Indian customers - such as Tandoor,'
                        +' Naan and vegetable dishes with paneer - is derived from the Punjab. The cuisine of Punjab is known for its diverse range of dishes.');
    }

    getImage(i: number) {
      let prefix = 'assets/images/others/';
      console.log("INDEX" + i);
      if(i == 0) {
        return prefix + 'goldentemple.jpg';
      } else if (i == 1) {
        return prefix + 'tandoor.jpg';
      }
    }

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }
}