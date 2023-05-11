import React from "react";
import { IAlbum } from "../../App";
import './AlbumCard.scss';

interface IProps {
    album: IAlbum,
}

interface IState {

}
export default class AlbumCard extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render () {
        const {props} = this;

        return (
            <div className="album-card">
                <img alt={`album ${props.album.image}`} src={props.album.image}></img>
                <h1 className="album-title">{props.album.title}</h1>
                <p className="album-artist">{props.album.artist}</p>
                <p className="album-year">{props.album.year}</p>
            </div>
        )
    }
}