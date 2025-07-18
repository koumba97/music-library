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
import spotifyLogo from '../../assets/images/listen-on-spotify-2.png';
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
                    <div className="content">
                        <div className="left">
                            <div
                                onClick={closeAlbumModalHandler}
                                className="close-icon"
                            >
                                <FontAwesomeIcon icon={faXmark} size="xl" />
                            </div>
                            <img
                                className="album-cover"
                                alt={`album ${album.title}`}
                                src={album.cover_medium}
                            ></img>
                            <h1 className="album-title">{album.title}</h1>
                            <h2 className="album-artist">
                                {album.artist?.name}
                            </h2>

                            <AlbumInfoContainer album={album} />
                        </div>

                        <div className="right">
                            <div className="control-container">
                                <div
                                    onClick={closeAlbumModalHandler}
                                    className="close-icon"
                                >
                                    <FontAwesomeIcon icon={faXmark} size="xl" />
                                </div>
                            </div>
                            <TrackList
                                tracks={album.tracks.data}
                                playTrack={playTrack}
                                playingTrack={playingTrack}
                            />
                        </div>
                    </div>

                    <AudioPlayer track={playingTrack} key={playTrack?.name} />
                </div>
            </div>
        </div>
    );
};

const AlbumInfoContainer = (props: { album: Album }) => {
    return (
        <div className="info-container">
            <a href={props.album.link} target="_blank">
                {/* <img
                    src={spotifyLogo}
                    className="spotify-logo"
                    alt="Logo"
                    height={30}
                /> */}
                deezer logo here
            </a>
            <p className="label">
                {props.album.release_date} - {props.album.label}
            </p>
        </div>
    );
};
export default AlbumModal;
