import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpInterceptorProviders } from './interceptors';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule 
  ],
  exports: [
    HeaderComponent
  ],
    providers: [
    {provide:LOCALE_ID, useValue: 'fr-Fr'},   
    HttpInterceptorProviders
  ]
})
export class CoreModule {  
  constructor(){ registerLocaleData(fr.default);
} 
}
