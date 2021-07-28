import { NgModule } from '@angular/core';

import { PressKit } from './press-kit';
import { AlbumCardModule } from '../album-card';
import { EmbeddedVideoModule } from '../embedded-video';
import { SongCardModule } from '../song-card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PressKit
  ],
  exports: [
    PressKit
  ],
  imports: [
    AlbumCardModule,
    CommonModule,
    EmbeddedVideoModule,
    SongCardModule,
  ],
  providers: [],
})
export class PressKitModule { }
