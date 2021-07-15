import { Component, OnInit, Input } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'song-card',
  templateUrl: './song-card.html',
  styleUrls: ['./song-card.scss']
})
export class SongCard implements OnInit {

  @Input() song: Song = {title: 'Placeholder', mediaSource: 'none'};

  /** Format a filename with the known path to music assets. */
  get fileUrl(): string {
    // Assume that accessing this property implies song.filename is defined.
    return `/assets/music/${this.song.filename}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
