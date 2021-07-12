import { NgModule } from '@angular/core';

import { SongCard } from './song-card';
import { SongList } from './song-list';

@NgModule({
  declarations: [
    SongCard,
    SongList
  ],
  exports: [
    SongCard,
    SongList,
  ],
  imports: [],
  providers: [],
})
export class SongListModule { }
