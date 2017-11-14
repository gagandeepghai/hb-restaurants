import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'banquet',
  templateUrl: 'banquet.html'
})

export class BanquetModal  {
    def;
    constructor(private viewCtrl: ViewController) {
      
      let course1 = ['Samosas', 'Checken & Cheese Kebab'];
      let course2 = ['Butter chicken', 'Lamb Rogan Josh', 'Mix vegetables', 'Steamed rice', 'Garlic naan', 'Plain naan', 'Papadoms'];
      let course3 = ['Mango kulfi'];

      this.def = {'First Course': course1, 'Second Course': course2,'Third Course': course3 };
    }

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }

    getKeys () {
      return Object.keys(this.def);
    }

    getItems (key) {
      return this.def[key];
    }
}