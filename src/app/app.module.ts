import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { RouterModule }       from '@angular/router';

import { AppComponent }       from './app.component';
import { WelcomeComponent }   from './home/welcome.component';
import { ProductModule }      from './products/product.module';

@NgModule({
  // Our directives, components and pipes are declared in the declarations array
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  // Directives, components and pipes used from other sources such as Angular or
  // third parties are delcared in the imports array
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // 404 not found.
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
