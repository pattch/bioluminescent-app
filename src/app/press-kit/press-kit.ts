import { Component, QueryList, ViewChildren } from '@angular/core';

import { SongCard } from '../song-card';

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
export class PressKit {
  // TODO: Consider simply implementing this in the template
  readonly bioluminescentSongs: Song[] = [
    {...fileParams, title: 'intro', filename: 'intro.mp3'},
    {...fileParams, title: '24/7', filename: '24_7.mp3'},
    {...fileParams, title: 'pity', filename: 'pity.mp3'},
    {...fileParams, title: 'bioluminescent', filename: 'bioluminescent.mp3'},
    {...fileParams, title: 'april', filename: 'april.mp3'},
  ];

  @ViewChildren(SongCard) songs?: QueryList<SongCard>;

  constructor() { }

  // TODO: Pause videos the same way as we pause songs here
  handleSourceChange(id: string) {
    // Pause all songs besides the new song
    for (const song of this.songs || []) {
      if (song.id !== id) {
        song.pause();
      }
    }
  }
}
