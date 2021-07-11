import { NgModule } from '@angular/core';

import { SongCardComponent } from './song-card.component';

@NgModule({
  declarations: [
    SongCardComponent
  ],
  exports: [
    SongCardComponent
  ],
  imports: [],
  providers: [],
})
export class SongListModule { }
