import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    StarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [  // Exports array allow modules to be shared accross the whole app.
    StarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
