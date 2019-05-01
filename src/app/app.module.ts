import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpClientModule }       from '@angular/common/http';
import { RouterModule }           from '@angular/router';

import { AppComponent }           from './app.component';
import { ProductListComponent }   from './products/product-list.component';
import { ConvertToSpacesPipe }    from './shared/convert-to-spaces.pipe';
import { StarComponent }          from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent }       from './home/welcome.component';

@NgModule({
  // Our directives, components and pipes are declared in the declarations array
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  // Directives, components and pipes used from other sources such as Angular or
  // third parties are delcared in the imports array
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:id', component: ProductDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' } // 404 not found.
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
