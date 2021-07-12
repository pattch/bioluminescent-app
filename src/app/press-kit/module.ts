import { NgModule } from '@angular/core';

import { PressKit } from './press-kit';
import { AlbumCardModule } from '../album-card';
import { SongListModule } from '../song-list';

@NgModule({
  declarations: [
    PressKit
  ],
  exports: [
    PressKit
  ],
  imports: [
    AlbumCardModule,
    SongListModule,
  ],
  providers: [],
})
export class PressKitModule { }
