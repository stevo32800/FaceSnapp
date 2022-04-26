import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandingPageComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    LandingPageComponentComponent
  ]
})
export class LandingPageModuleModule { }
