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
    const [loading, setLoading] = useState<boolean>(true);

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
                setAlbumData(response.data);
                setLoading(false);

            });
        }
        catch(error) {
            console.error(error);
        }
    } 

    const { images, name, artists, release_date } = albumData;
    if(!loading){
        return (
            <div 
                className="album-card"
                onClick={clickHandler}
            >
                <img alt={`album ${name}`} src={images[0].url}></img>
    
                <div className='album-info'>
                    <TitleRendering title={albumData.name} />
    
                    <p className="album-artist">{artists[0].name}</p>
                    <p className="album-year">{release_date.slice(0, 4)}</p>
                </div>
       
            </div>
        );
    }
    return(
        <></>
    )
    
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
