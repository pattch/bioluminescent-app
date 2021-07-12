import { Component, OnInit, Input } from '@angular/core';

import {Song} from './song';

@Component({
  selector: 'song-list',
  templateUrl: './song-list.html',
  styleUrls: ['./song-list.scss']
})
export class SongList implements OnInit {

  @Input() songList?: ReadonlyArray<Song>;

  constructor() { }

  ngOnInit(): void {
  }

}
