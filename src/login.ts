/// <reference path="../typings/angular2/angular2.d.ts" />

import {
    Component, View, bootstrap
}
from 'angular2/angular2';

@
Component({
    selector: 'login'
})

@ View({
    templateUrl: 'login/login.html'
})

// Component controller
export class Login {

    constructor(router: Router) {
        this.router = router;
    }

    login(event, username, password) {
        event.preventDefault();

        fetch('http://localhost:3001/sessions/create', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username, password
                })
            })
            .then(status)
            .then(json)
            .then((response) => {
                localstorage.setItem('jwt', response.id_token)
                this.router.parent.navigate('/home')

            })
            .catch((error) => {
                alert(error.message);
                console.log(error.message);
            });
    }
}
