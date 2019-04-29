import { Component } from '@angular/core';

@Component({
  // Selector used as a directive in the HTML (a custom element)
  selector: 'pm-root',
  template: `
    <div>
      <h1>{{pageTitle}}</h1>
      <pm-products></pm-products>
    </div>
    `
})
export class AppComponent {
// The 'export' keyword ensures other parts of the app can use this class
  pageTitle: string = 'Acme Product Management';
}
