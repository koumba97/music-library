import { useState, useEffect } from 'react';
import axios from 'axios';
import { IAlbum } from '../../App';
import './AlbumCard.scss';
import Tooltip from '../Tooltip/Tooltip';
import AlbumModal from '../AlbumModal/AlbumModal';
import { AlbumInfo } from '../../spotify/types/AlbumInfo';

interface IProps {
    album: IAlbum;
    selectAlbum: Function
}

const AlbumCard = ({ album, selectAlbum }: IProps) => {

    const [albumData, setAlbumData] = useState<AlbumInfo>({} as AlbumInfo);

    useEffect(() => {
        getAlbumData();
    }, []);

    const clickHandler = () => {
    	selectAlbum(albumData);
  	}

    const getAlbumData = async () => {
        try {
            axios.get(`https://api.spotify.com/v1/albums/${album.trackId}?market=US`, {
                params: {
                    grant_type: 'client_credentials',
                }, 
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${localStorage.getItem('music-library-access-token')}`
                }
            }).then(response => {
                setAlbumData(response.data)
            });
        }
        catch(error) {
            console.error(error);
        }
    } 

    const { image, title, artist, year } = album;
    return (
        <div 
            className="album-card"
            onClick={clickHandler}
        >
            <img alt={`album ${title}`} src={image}></img>

            <TitleRendering title={title} />

            <p className="album-artist">{artist}</p>
            <p className="album-year">{year}</p>
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
