import { Type } from './Type';

export interface Artist {
    id: number;
    name: string;
    trackList: string;
    type: Type;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_large: string;
    picture_xl: string;
}
