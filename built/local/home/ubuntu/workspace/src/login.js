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
var Login = (function () {
    function Login(router) {
        this.router = router;
    }
    Login.prototype.login = function (event, username, password) {
        var _this = this;
        event.preventDefault();
        fetch('http://localhost:3001/sessions/create', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username, password: password
            })
        })
            .then(status)
            .then(json)
            .then(function (response) {
            localstorage.setItem('jwt', response.id_token);
            _this.router.parent.navigate('/home');
        })
            .catch(function (error) {
            alert(error.message);
            console.log(error.message);
        });
    };
    Login = __decorate([
        angular2_1.Component({
            selector: 'login'
        }),
        angular2_1.View({
            templateUrl: 'login/login.html'
        })
    ], Login);
    return Login;
})();
exports.Login = Login;
