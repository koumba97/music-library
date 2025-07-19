import { useState, useEffect } from 'react';
import axios from 'axios';
import { IAlbum } from '../../App';
import './AlbumModal.scss';
import Tooltip from '../Tooltip/Tooltip';
import { AlbumInfo } from '../../spotify/types/AlbumInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import TrackList from '../TrackList/TrackList';
import { Track } from '../../deezer/types/Track';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import deezerLogo from '../../assets/images/logo-deezer-white.png';
import { Album } from '../../deezer/types/Album';

interface IProps {
    album: Album;
    closeAlbumModal: Function;
}

const AlbumModal = ({ album, closeAlbumModal }: IProps) => {
    const [playingTrack, setPlayingTrack] = useState<Track | undefined>(
        undefined
    );

    const closeAlbumModalHandler = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        closeAlbumModal();
    };

    const playTrack = (track: Track) => {
        setPlayingTrack(track);
    };
    if (!album) return null;
    return (
        <div className="album-modal">
            <div className="modal-bg" onClick={closeAlbumModalHandler}>
                <div
                    className="modal-container"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="control-container">
                        <div
                            onClick={closeAlbumModalHandler}
                            className="close-icon"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>

                    <div className="left">
                        <img
                            className="album-cover"
                            alt={`album ${album.title}`}
                            src={album.cover_big}
                        ></img>
                        <h1 className="album-title">{album.title}</h1>
                        <h2 className="album-artist">{album.artist?.name}</h2>

                        <div className="info-container">
                            <p className="label">{album.label}</p>
                        </div>
                    </div>

                    <div className="right">
                        <TrackList
                            tracks={album.tracks.data}
                            playTrack={playTrack}
                            playingTrack={playingTrack}
                        />
                        <a href={album.link} target="_blank">
                            <span>
                                Listen the full album on
                                <img
                                    src={deezerLogo}
                                    className="spotify-logo"
                                    alt="Logo"
                                    height={30}
                                />
                            </span>
                        </a>
                    </div>

                    <AudioPlayer track={playingTrack} key={playTrack?.name} />
                </div>
            </div>
        </div>
    );
};

export default AlbumModal;
