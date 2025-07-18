import { TrackAlbum } from './Album';
import { Artist } from './Artist';
import { Type } from './Type';

export interface Track {
    album: TrackAlbum;
    artist: Artist;
    duration: number;
    explicit_content_cover: number;
    explicit_content_lyrics: number;
    explicit_lyrics: boolean;
    id: number;
    link: string;
    md5_image: string;
    preview: string;
    rank: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    type: Type;
}
