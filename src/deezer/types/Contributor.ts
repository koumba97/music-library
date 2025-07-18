import { Type } from './Type';

export interface Contributor {
    id: number;
    link: string;
    name: string;
    picture: string;
    picture_big: string;
    picture_medium: string;
    picture_small: string;
    picture_xl: string;
    trackList: string;
    radio: string;
    role: string;
    share: string;
    tracklist: string;
    type: Type;
}
