// https://developer.spotify.com/documentation/web-api/reference/get-an-album

import { Artist } from "./Artist";
import { Image } from "./Image";
import { Track } from "./Track";

export interface AlbumInfo {
    id: string,
    name: string,
    album_type: string,
    total_tracks: number,
    available_markets: string[],
    external_urls: {
        spotify: string;
    },
    href: string,
    images: Image[],
    release_date: string,
    uri: string,
    copyrights: string[],
    external_id: {
        isrc: string,
        ean: string,
        upc: string,
    },
    label: string,
    genres: string[],
    artists: Artist[],
    tracks: Track,
}