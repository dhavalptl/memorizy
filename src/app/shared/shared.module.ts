import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  exports: [NgbModule],
  declarations: []
})
export class SharedModule { }
