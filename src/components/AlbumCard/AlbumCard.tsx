import { useState, useEffect } from 'react';
import './AlbumCard.scss';
import Tooltip from '../Tooltip/Tooltip';
import { AlbumInfo } from '../../spotify/types/AlbumInfo';
import { Album } from '../../deezer/types/Album';

interface IProps {
    album: Album;
    selectAlbum: Function;
}

const AlbumCard = ({ album, selectAlbum }: IProps) => {
    const clickHandler = () => {
        selectAlbum(album);
    };

    const { cover_medium, title, artist, release_date } = album;

    return (
        <div className="album-card" onClick={clickHandler}>
            <img alt={`album ${title}`} src={cover_medium}></img>

            <div className="album-info">
                <TitleRendering title={title} />

                <p className="album-artist">{artist.name}</p>
                <p className="album-year">{release_date.slice(0, 4)}</p>
            </div>
        </div>
    );
};

const TitleRendering = (props: { title: string }) => {
    if (props.title.length > 20) {
        return (
            <div className="tooltip">
                <h1 className="album-title">{props.title}</h1>
                <Tooltip content={props.title} />
            </div>
        );
    }
    return <h1 className="album-title">{props.title}</h1>;
};

export default AlbumCard;
