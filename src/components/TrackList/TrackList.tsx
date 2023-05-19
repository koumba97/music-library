import { Track } from "../../spotify/types/Track";
import TrackItem from "../TrackItem/TrackItem";
import './TrackList.scss';

interface IProps {
    track: Track;
}

const TrackList = ({track} : IProps) => {
    return (
        <div className="track-list">
            <h2>Tracks</h2>
            <div className="list-container">
               {track.items.map((item) => {
                    return (
                        <TrackItem track={item}/>
                    );
                })} 
            </div>
            
        </div>
    );
}

export default TrackList;