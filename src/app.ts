/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'pantler-app'
})

@View({
  template: `
  
  <!--The router-outlet displays the template for the current component based on the URL -->
  <router-outlet></router-outlet>                   
  `,
  directives: [RouterOutlet]
})

// Component controller
export class App {
  
  constructor(router: Router) {
      
    this.router = router;
    router
      .config('/home', Home, 'home')
      .then((_) => router.config('/login'), Login, 'login')
      .then((_) => router.navigate('/home'))
  }
}

bootstrap(App, [
    bind(Router).toValue(new RouteRouter(new Pipeline))
    ])