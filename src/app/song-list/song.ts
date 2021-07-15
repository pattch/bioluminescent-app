export interface Song {
  title: string;
  artwork?: string;
  mediaSource?: 'file'|'embedded'|'none';
  filename?: string;
  /** To be used when embedding songs as locally served files */
  audioType?: string;
  /** A fully qualified URL to be used when embedding external sources */
  url?: string;
}
