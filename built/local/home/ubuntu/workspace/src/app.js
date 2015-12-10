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
var App = (function () {
    function App(router) {
        this.router = router;
        router
            .config('/home', Home, 'home')
            .then(function (_) { return router.config('/login'); }, Login, 'login')
            .then(function (_) { return router.navigate('/home'); });
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'pantler-app'
        }),
        angular2_1.View({
            template: "\n  \n  <!--The router-outlet displays the template for the current component based on the URL -->\n  <router-outlet></router-outlet>                   \n  ",
            directives: [RouterOutlet]
        })
    ], App);
    return App;
})();
exports.App = App;
angular2_1.bootstrap(App, [
    bind(Router).toValue(new RouteRouter(new Pipeline))
]);
