import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'song-card',
  templateUrl: './song-card.html',
  styleUrls: ['./song-card.scss']
})
export class SongCard {
  @Input() title: string = '';
  @Input() artwork: string = '';
  @Input() id!: string;

  @Input() mediaSource?: 'file'|'embedded';

  // Params needed for a song rendered for self-hosted songs
  @Input() filename?: string;
  @Input() audioType?: string;

  // External resource for embedding externally-hosted songs
  @Input() url?: string;

  @Output() playing = new EventEmitter<string>();

  /** Format a filename with the known path to music assets. */
  get fileUrl(): string {
    // Assume that accessing this property implies song.filename is defined.
    return `/assets/music/${this.filename}`;
  }

  get artworkUrl(): string {
    return `/assets/images/${this.artwork}`;
  }

  private isPlayingInternal = false;
  get isPlaying() {
    return this.isPlayingInternal;
  }

  @ViewChild('player') audioPlayer?: ElementRef<HTMLAudioElement>;

  constructor() { }

  handleClick() {
    const audio = this.audioPlayer?.nativeElement;
    if (!audio) {
      return;
    }

    if (audio.paused) {
      audio.play();
      this.playing.emit(this.id);
      this.isPlayingInternal = true;
    } else {
      audio.pause();
      this.isPlayingInternal = false;
    }
  }

  pause() {
    const audio = this.audioPlayer?.nativeElement;
    if (!audio || audio.paused) {
      return;
    }

    audio.pause();
    this.isPlayingInternal = false;
  }
}
