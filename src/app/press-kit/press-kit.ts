import { Component, OnInit } from '@angular/core';
import { Song } from '../song-list';

const SONG_LIST: ReadonlyArray<Song> = [
  {songTitle: 'Test', mediaType: 'none'},
  {songTitle: 'Test', mediaType: 'none'},
];

@Component({
  selector: 'press-kit',
  templateUrl: './press-kit.html',
  styleUrls: ['./press-kit.scss']
})
export class PressKit implements OnInit {

  readonly songList = SONG_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
