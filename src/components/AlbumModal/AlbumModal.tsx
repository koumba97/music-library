import { useState, useEffect } from 'react';
import axios from 'axios';
import { IAlbum } from '../../App';
import './AlbumModal.scss';
import Tooltip from '../Tooltip/Tooltip';
import { AlbumInfo } from '../../spotify/types/AlbumInfo';

interface IProps {
    album: AlbumInfo;
}

const AlbumModal = ({ album }: IProps) => {

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

  
    if(album.tracks){
        return (
            <div className="album-modal">
                {}
                <audio
                    controls
                    src={album.tracks.items[0].preview_url}
                />
            </div>
        )
    }

    return null;
}

export default AlbumModal;
