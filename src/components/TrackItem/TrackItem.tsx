import { TrackItem as TrackItemInterface } from "../../spotify/types/TrackItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faPlay } from '@fortawesome/free-solid-svg-icons';
import './TrackItem.scss';
import { useState } from "react";

interface IProps {
    track: TrackItemInterface;
    playTrack: Function;
    isPlaying: boolean;
}

const TrackItem = ({track, playTrack, isPlaying}: IProps) => {
    const clickHandler = () => {
        playTrack(track);
    };

    return (
        <> 
            <div className={"track-item " + (isPlaying ? 'is-playing' : '')} onClick={clickHandler}>
                <p className="track-name">{track.name}</p>
                { isPlaying ? <FontAwesomeIcon icon={faMusic} size="lg" className="play-icon"/> : <FontAwesomeIcon icon={faPlay} size="lg" className="play-icon"/> }
            </div>
            <div className="line"></div>
        </>
       
    )
}

export default TrackItem;