import { TrackItem as TrackItemInterface } from "../../spotify/types/TrackItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './TrackItem.scss';

interface IProps {
    track: TrackItemInterface;
    playTrack: Function;
}

const TrackItem = ({track, playTrack}: IProps) => {

    const clickHandler = () => {
        playTrack(track);
    };

    return (
        <div className="track-item" onClick={clickHandler}>
            <p className="track-name">{track.name}</p>
            <FontAwesomeIcon icon={faPlay} size="lg" className="play-icon"/>
        </div>
    )
}

export default TrackItem;