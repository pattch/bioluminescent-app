export interface Song {
  songTitle: string;
  artwork?: string;
  // TODO: Consider how songs displayed here will be sourced
  mediaType: 'file'|'embedded'|'none';
}
