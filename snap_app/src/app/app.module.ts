import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {  ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { LandingPageModuleModule } from './landing-page-module/landing-page-module.module';
import { authRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,        
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    ReactiveFormsModule,   
    CoreModule,
    LandingPageModuleModule,
    authRoutingModule,
    AuthModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
