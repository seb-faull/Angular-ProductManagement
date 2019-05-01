import { Component } from '@angular/core';

@Component({
  // Selector used as a directive in the HTML (a custom element)
  selector: 'pm-root',
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
        <a class='navbar-brand'>{{ pageTitle }}</a>
        <ul class='nav nav-pills'>
          <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
          <li><a class='nav-link' [routerLink]="['/products']">Product List</a></li>
        </ul>
    </nav>
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
// The 'export' keyword ensures other parts of the app can use this class
  pageTitle: string = 'Acme Product Management';
}
