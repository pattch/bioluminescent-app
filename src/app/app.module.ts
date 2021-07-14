import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PressKitModule } from './press-kit/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PressKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
