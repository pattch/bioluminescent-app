import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import {Song} from './song';

@Component({
  selector: 'song-list',
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SongList implements OnInit {

  @Input() songs?: ReadonlyArray<Song>;

  constructor() { }

  ngOnInit(): void {
    console.log('xxxx songList', this.songs);
  }

}
