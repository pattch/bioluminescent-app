import { Component, OnInit } from '@angular/core';
import { Song } from '../song-list';

// TODO: Stop wrapping this as <song-list>. Instead, this can just be part of the declared UI.
// That way, when / if we want to support multiple formats of interspersed content (e.g. video)
// or text, they can naturally and directly fit in the template instead of being jammed in here.
const SONG_LIST: ReadonlyArray<Song> = [
  {title: 'intro', mediaSource: 'file', filename: 'intro.mp3', audioType: 'audio/mpeg'},
  {title: '24/7', mediaSource: 'file', filename: '24_7.mp3', audioType: 'audio/mpeg'},
  {title: 'pity', mediaSource: 'file', filename: 'pity.mp3', audioType: 'audio/mpeg'},
  {title: 'bioluminescent', mediaSource: 'file', filename: 'bioluminescent.mp3', audioType: 'audio/mpeg'},
  {title: 'april', mediaSource: 'file', filename: 'april.mp3', audioType: 'audio/mpeg'},
  {title: 'Test', mediaSource: 'none'},
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
