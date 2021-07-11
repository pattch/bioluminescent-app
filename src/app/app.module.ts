import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumCardModule } from './album-card/module';
import { SongListModule } from './song-list/module';
import { PressKitModule } from './press-kit/module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AlbumCardModule,
    BrowserModule,
    PressKitModule,
    SongListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
