import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumCardComponentModule } from './album-card/album-card.component.module';
import { SongListModule } from './song-list/song-card.component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AlbumCardComponentModule,
    BrowserModule,
    SongListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
