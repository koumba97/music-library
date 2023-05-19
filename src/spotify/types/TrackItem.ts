import { Artist } from "./Artist";

export interface TrackItem {
    artists: Artist[],
    id: string,
    name: string,
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_urls: {
    spotify: string
    },
    href: string,
    is_playable: boolean,
    preview_url: string,
    track_number: number,
}