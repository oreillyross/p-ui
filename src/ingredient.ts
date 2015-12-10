/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'ingredient'
})

@View({
  templateUrl: 'views/ingredient.html'
})
// Component controller
class Ingredient {
  
  name: string;
  expiry: Date;
  
  constructor() {
    this.name = 'Aubergine';
    this.expiry = new Date('December 17, 2016 03:24:00');
  }
  
  
}

