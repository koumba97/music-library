import React from "react";
import { IAlbum } from "../../App";
import './AlbumCard.scss';
import Tooltip from "../Tooltip/Tooltip";

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
                
                <TitleRendering title={props.album.title}/>
               
                <p className="album-artist">{props.album.artist}</p>
                <p className="album-year">{props.album.year}</p>
            </div>
        )
    }
}

const TitleRendering = (props: {title:string}) =>{
    if(props.title.length > 20){
        return(
            <div className="tooltip">
                <h1 className="album-title">{props.title}</h1>
                <Tooltip content={props.title} />
            </div> 
        )
    }
    return(
        <h1 className="album-title">{props.title}</h1>
    )
}