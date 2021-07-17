import { NgModule } from '@angular/core';

import { SongCard } from './song-card';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SongCard,
  ],
  exports: [
    SongCard,
  ],
  entryComponents: [
    SongCard,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class SongCardModule { }
