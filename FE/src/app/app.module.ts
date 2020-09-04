import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { AppRoutingMoudle } from './app-routing.module';

import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingMoudle,
    BrowserAnimationsModule,
    SharedModule,
    DefaultModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
