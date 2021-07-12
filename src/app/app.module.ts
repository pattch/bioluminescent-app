import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PressKitModule } from './press-kit/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PressKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
