import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'song-card',
  templateUrl: './song-card.html',
  styleUrls: ['./song-card.scss']
})
export class SongCard implements OnInit {

  // @Input() song: Song = {title: 'Placeholder', mediaSource: 'none'};
  @Input() title: string = '';
  @Input() artwork: string = '';

  @Input() mediaSource?: 'file'|'embedded';

  // Params needed for a song rendered for self-hosted songs
  @Input() filename?: string;
  @Input() audioType?: string;

  // External resource for embedding externally-hosted songs
  @Input() url?: string;

  /** Format a filename with the known path to music assets. */
  get fileUrl(): string {
    // Assume that accessing this property implies song.filename is defined.
    return `/assets/music/${this.filename}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
