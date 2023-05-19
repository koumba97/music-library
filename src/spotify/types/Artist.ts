export interface Artist {
    id: string,
    name: string,
    external_urls: {
        spotify: string
    };
    genres: string[],
    href: string,
    images: Artist,
    uri: string,
}