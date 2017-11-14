import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core'; 
import {Slides} from 'ionic-angular';

@Component({
  selector: 'gallery',
  templateUrl: 'gallery.html'
})

export class PhotosSlideShow  {
    images: String[] = [];
    slideIndex: Number = 1;
    @ViewChild('mySlider') slider: Slides;
    
    constructor(private viewCtrl: ViewController) {
      this.fetchImages();
    }

    fetchImages() {
       for (var i = 1; i <=20; ++i) {
         this.images.push('assets/images/' + i + '.jpg');
       }
    }
    
    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }

    slideChanged() {
      this.slideIndex = this.slider.getActiveIndex() + 1;
    }
}