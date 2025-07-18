import { Artist } from './Artist';
import { Genre } from './Genre';
import { Track } from './Track';
import { Contributor } from './Contributor';

export interface Album {
    artist: Artist;
    available: boolean;
    contributor: Contributor[];
    cover: string;
    cover_big: string;
    cover_medium: string;
    cover_small: string;
    cover_xl: string;
    duration: number;
    explicit_content_cover: number;
    explicit_content_lyrics: number;
    fans: number;
    genre_id: number;
    genres: { data: Genre[] };
    id: number;
    label: string;
    link: string;
    md5_image: string;
    nb_tracks: number;
    record_type: string;
    release_date: string;
    share: string;
    title: string;
    tracklist: string;
    tracks: { data: Track[] };
    type: string;
    upc: string;
}

export interface TrackAlbum {
    cover: string;
    cover_big: string;
    cover_medium: string;
    cover_small: string;
    cover_xs: string;
    id: number;
    md5_image: string;
    title: string;
    tracklist: string;
    type: string;
}
