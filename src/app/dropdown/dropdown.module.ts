import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { OrderbyPipe } from './orderby.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DropdownComponent, OrderbyPipe],
  exports: [DropdownComponent]
})
export class DropdownModule { }
