import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS }  from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthIntercerptor } from './auth/helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule, // import  forma global
    HttpClientModule, 
    BrowserAnimationsModule // import  forma global
  ],
  providers: [//todos los interceptor deben estar en provaider
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntercerptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
