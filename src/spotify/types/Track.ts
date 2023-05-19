import { TrackItem } from "./TrackItem"

export interface Track {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: TrackItem[]
}