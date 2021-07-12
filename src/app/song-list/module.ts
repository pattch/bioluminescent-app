import { NgModule } from '@angular/core';

import { SongCard } from './song-card';

@NgModule({
  declarations: [
    SongCard
  ],
  exports: [
    SongCard
  ],
  imports: [],
  providers: [],
})
export class SongListModule { }
