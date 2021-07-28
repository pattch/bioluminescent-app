import { Component, Input } from '@angular/core';

@Component({
  selector: 'embedded-video',
  templateUrl: './embedded-video.html',
  styleUrls: ['./embedded-video.scss'],
})
export class EmbeddedVideo {

  @Input() width: number = 1280;
  @Input() height: number = 720;

  @Input() source!: string;

  constructor() {}

}
