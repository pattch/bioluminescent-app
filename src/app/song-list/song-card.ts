import { Component, OnInit, Input } from '@angular/core';
import { Song } from './song';

@Component({
  selector: 'song-card',
  templateUrl: './song-card.html',
  styleUrls: ['./song-card.scss']
})
export class SongCard implements OnInit {

  @Input() song: Song = {title: 'Placeholder', mediaType: 'none'};

  constructor() { }

  ngOnInit(): void {
  }

}
