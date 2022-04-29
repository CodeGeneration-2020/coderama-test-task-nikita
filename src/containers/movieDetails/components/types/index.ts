import { IFilm } from '../../../../common/types';

export interface ISubtitlesContentItem {
  title: string;
  field: keyof IFilm;
}

export type ISubtitlesContent = ISubtitlesContentItem[];
