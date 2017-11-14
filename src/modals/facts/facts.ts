import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'facts',
  templateUrl: 'facts.html'
})

export class FoodFactsModal  {
    facts: String[] = [];
    constructor(private viewCtrl: ViewController) {
      this.facts = ['India is the world’s largest producer of bananas, producing nearly 22 million tons in 2007',
                    'The sweet potato is a root vegetable and is not closely related to the potato',
                    'Bananas contain around 75% water.',
                    'Apple is made of 25% air, that is why they float.',
                    'Apples, onions, and potatoes all have the same taste? Try the test: Pinch your nose and take a bite out of each.',
                    'Avocado has the highest protein and oil content of all fruits, but most of this is the healthier unsaturated type.',
                    'Cabbage is 91% water.',
                    'Carrots were originally purple in colour, changing in the 17th Century to orange with newer varieties.',
                    'Celery requires more calories to eat and digest than it contains.',
                    'Cherries are a member of the rose family.',
                    'Corn always has an even number of ears.',
                    'Corn makes up about 8% of the weight in a box of corn flakes.',
                    'Eggplants are actually fruits, and classified botanically as berries.',
                    'Honey is the only edible food for humans that will never go bad.',
                    'Lemons contain more sugar than strawberries.',
                    'Peanuts are legumes and not a tree nut.',
                    'Peanuts are one of the ingredients in dynamite.',
                    'Pear is a fruit that ripens from the inside out.',
                    'Strawberries are the only fruit which has its seeds on its outer skin.',
                    'Lentils help in many major functions of the body including regulating our blood cholesterol and blood sugar levels.',
                    'Red chillies are the fruit pod of a plant from the capscain family',
                    'Chilli peppers contain the chemical compound capsaicin, which has anti-bacterial, anti-carcinogenic, analgesic and anti-diabetic properties',
                    'Paneer has the health benefit of preventing osteoporosis and has been found to promote weight loss'
                  ];
    }

    getClass(i: number) {
      console.log(i);
    }

    dismiss(data): void {
      this.viewCtrl.dismiss(data);
    }
}