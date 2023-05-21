import { useState, useEffect } from 'react';
import axios from 'axios';
import { IAlbum } from '../../App';
import './AlbumModal.scss';
import Tooltip from '../Tooltip/Tooltip';
import { AlbumInfo } from '../../spotify/types/AlbumInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import TrackList from '../TrackList/TrackList';
import { Track } from '../../spotify/types/Track';
import { TrackItem } from '../../spotify/types/TrackItem';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import spotifyLogo from '../../assets/images/spotify-logo.png';

interface IProps {
    album: AlbumInfo;
    closeAlbumModal: Function;
}

const AlbumModal = ({ album, closeAlbumModal }: IProps) => {
    const [playingTrack, setPlayingTrack] = useState<TrackItem | null>(null);

    const closeAlbumModalHandler = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        closeAlbumModal();
    };

    const playTrack = (track: TrackItem) => {
        setPlayingTrack(track);
    };

    if (album.tracks) {
        return (
            <div className="album-modal">
                <div className="modal-bg" onClick={closeAlbumModalHandler}>
                    <div
                        className="modal-container"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="content">
                            <div className="left">
                                <img
                                    className="album-cover"
                                    alt={`album ${album.name}`}
                                    src={album.images[0].url}
                                ></img>
                                <h1 className="album-title">{album.name}</h1>
                                <h2 className="album-artist">
                                    {album.artists[0].name}
                                </h2>
                                <p className='album-date'>{album.release_date.slice(0, 4)}</p>
                                
                                <AlbumInfoContainer album={album}/>
                            </div>

                            <div className="right">
                                <div className="control-container">
                                    <div
                                        onClick={closeAlbumModalHandler}
                                        className="close-icon"
                                    >
                                        <FontAwesomeIcon
                                            icon={faXmark}
                                            size="xl"
                                        />
                                    </div>
                                </div>
                                <TrackList
                                    track={album.tracks}
                                    playTrack={playTrack}
                                    playingTrack={playingTrack?.id}
                                />
                            </div>
                        </div>

                        <AudioPlayer track={playingTrack} key={playTrack?.name} />
                    </div>
                </div>
            </div>
        );
    }

    return null;
};

const AlbumInfoContainer = (props: {album: AlbumInfo}) => {
    return(
        <div className='info-container'>
            <a href={props.album.external_urls.spotify} target='_blank'>
                <img src={spotifyLogo} className="spotify-logo" alt="Logo" height={30}/>
            </a>
            <p className='label'>{props.album.label}</p>
        </div>
    );
}
export default AlbumModal;
