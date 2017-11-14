import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'story',
  templateUrl: 'story.html'
})

export class StoryModal  {
    snippets: String[] = [];
    images: String[] = [];
    constructor(private viewCtrl: ViewController) {
      this.snippets.push('Well, it all begun in 2008 when chef (Karanbir) decided to come Australia (Tasmania) to pursue his Commercial Cookery certificates. He got experience and exposure of different cuisines from all over the world through studies and apprenticeship.');
      this.snippets.push('In 2012 chef took Christmas holidays in St. Helens along with his wife and they really liked the place. Chef openined as his first restaurant in St. Helens and decided to name the restaurant PUNJ AAB’S after his mother land.');
      this.snippets.push('Punj aab’s got very popular with locals and was very highly appreciated by tourist travelling from all over the world. In winter of 2013 we decided to take some time off from work and came to Sydney for small trip and loved the weather, vibe and feel of this lovely city, hence we knew our big future step.');
    }

    getImage(i: number) {
      let prefix = 'assets/images/others/';
      console.log("INDEX" + i);
      if(i == 0) {
        return prefix + 'tasmania.jpg';
      } else if (i == 1) {
        return prefix + 'christmas.jpg';
      } else {
        return prefix + 'sydney.jpg';
      }
    }

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }
}