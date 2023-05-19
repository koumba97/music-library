import { useState, useEffect } from 'react';
import axios from 'axios';
import { IAlbum } from '../../App';
import './AlbumModal.scss';
import Tooltip from '../Tooltip/Tooltip';
import { AlbumInfo } from '../../spotify/types/AlbumInfo';

interface IProps {
    album: AlbumInfo;
    closeAlbumModal: Function;
}

const AlbumModal = ({ album, closeAlbumModal }: IProps) => {

    useEffect(() => {
        //getTracksPreview();
    }, []);

    const getTracksPreview = async () => {
        try {
            // axios.get(`https://api.spotify.com/v1/albums/${album.trackId}?market=US`, {
            //     params: {
            //         grant_type: 'client_credentials',
            //     }, 
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //         Authorization: `Bearer ${localStorage.getItem('music-library-access-token')}`
            //     }
            // }).then(response => {
            //     console.log(response);
            // });
        }
        catch(error) {
            console.error(error);
        }
    } 

    const closeAlbumModalHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        closeAlbumModal();
    }
  
    if(album.tracks){
        return (
            <div className="album-modal">

                <div className='modal-bg' onClick={closeAlbumModalHandler}>
                    <div className='modal-container' onClick={(e) => e.stopPropagation()}>
                        <div>
                            <img className='album-cover' alt={`album ${album.name}`} src={album.images[0].url}></img>
                            <h1 className='album-title'>{album.name}</h1>
                            <h2 className='album-artist'>{album.artists[0].name}</h2>
                        </div>
                        <div>
                            
                            <audio
                                controls
                                src={album.tracks.items[0].preview_url}
                            /> 
                        </div>
                        
                    </div>
                </div>

            </div>
        )
    }

    return null;
}

export default AlbumModal;
