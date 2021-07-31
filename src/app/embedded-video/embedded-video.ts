import { Component, Input } from '@angular/core';

@Component({
  selector: 'embedded-video',
  templateUrl: './embedded-video.html',
  styleUrls: ['./embedded-video.scss'],
})
export class EmbeddedVideo {
  @Input() source!: string;

  constructor() {}
}
