/// <reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var Ingredient = (function () {
    function Ingredient() {
        this.name = 'Aubergine';
        this.expiry = new Date('December 17, 2016 03:24:00');
    }
    Ingredient = __decorate([
        angular2_1.Component({
            selector: 'ingredient'
        }),
        angular2_1.View({
            templateUrl: 'views/ingredient.html'
        })
    ], Ingredient);
    return Ingredient;
})();
