import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Lib1Module} from 'lib1';
import {Lib2Module} from 'lib2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      Lib1Module,
      Lib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
