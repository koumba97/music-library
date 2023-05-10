import React from "react";
import { IAlbum } from "../../App";
import './AlbumCard.scss';

interface IProp {
    album: IAlbum,
}

interface IState {

}
export default class AlbumCard extends React.Component<IProp, IState> {
    constructor(props: IProp) {
        super(props);
    }

    render () {
        const {props} = this;

        return (
            <div className="album-card">
                <img alt={`album ${props.album.image}`} src={props.album.image}></img>
                <h1 key={props.album.id}>{props.album.title}</h1>
            </div>
        )
    }
}