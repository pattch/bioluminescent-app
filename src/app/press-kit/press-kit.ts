import { Component, OnInit } from '@angular/core';

// TODO: Stop wrapping this as <song-list>. Instead, this can just be part of the declared UI.
// That way, when / if we want to support multiple formats of interspersed content (e.g. video)
// or text, they can naturally and directly fit in the template instead of being jammed in here.

interface Song {
  title: string;
  artwork: string;
  mediaSource: 'file'|'embedded'|undefined;
  filename?: string;
  /** To be used when embedding songs as locally served files */
  audioType?: string;
  /** A fully qualified URL to be used when embedding external sources */
  url?: string;
}

const fileSource: 'file'|'embedded'|undefined = 'file';

const fileParams = {
    mediaSource: fileSource,
    audioType: 'audio/mpeg',
    artwork: '',
};

@Component({
  selector: 'press-kit',
  templateUrl: './press-kit.html',
  styleUrls: ['./press-kit.scss']
})
export class PressKit implements OnInit {

  readonly bioluminescentSongs: Song[] = [
    {...fileParams, title: 'intro', filename: 'intro.mp3'},
    {...fileParams, title: '24/7', filename: '24_7.mp3'},
    {...fileParams, title: 'pity', filename: 'pity.mp3'},
    {...fileParams, title: 'bioluminescent', filename: 'bioluminescent.mp3'},
    {...fileParams, title: 'april', filename: 'april.mp3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
