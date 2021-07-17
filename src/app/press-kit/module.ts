import { NgModule } from '@angular/core';

import { PressKit } from './press-kit';
import { AlbumCardModule } from '../album-card';
import { SongCardModule } from '../song-list';
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
    SongCardModule,
  ],
  providers: [],
})
export class PressKitModule { }
