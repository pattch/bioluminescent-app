import { NgModule } from '@angular/core';

import { SongCard } from './song-card';
import { SongList } from './song-list';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SongCard,
    SongList
  ],
  exports: [
    SongCard,
    SongList,
  ],
  entryComponents: [
    SongCard,
    SongList,
  ],
  imports: [
    CommonModule,
  ],
  providers: [],
})
export class SongListModule { }
