import React from "react";
import './CardList.scss';
import AlbumCard from "../AlbumCard/AlbumCard";
import { IAlbum } from "../../App";


type Item = any;

 interface IItem extends Item {
    id : string | number;
    title: string;
 }

interface IProps {
    list: IItem[];
    listType: string;
}

interface IState {

}

export default class CardList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { props } = this;

        if(props.list)
        return (
            <div className="card-list">
                {props.list.map(item => {
                    if(props.listType === 'album')
                    return (
                        <AlbumCard key={item.id} album={item as IAlbum}></AlbumCard>
                    )
                })}
            </div>
        )
    }
}