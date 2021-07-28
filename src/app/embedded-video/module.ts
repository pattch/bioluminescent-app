import { NgModule } from '@angular/core';

import { EmbeddedVideo } from './embedded-video';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    EmbeddedVideo
  ],
  exports: [
    EmbeddedVideo
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [],
})
export class EmbeddedVideoModule { }
