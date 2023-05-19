import { TrackItem as TrackItemInterface } from "../../spotify/types/TrackItem";
import './TrackItem.scss';

interface IProps {
    track: TrackItemInterface
}

const TrackItem = ({track}: IProps) => {

    return (
        <div className="track-item">
            <p className="track-name">{track.name}</p>
            <audio
                controls
                src={track.preview_url}
            /> 
        </div>
    )
}

export default TrackItem;