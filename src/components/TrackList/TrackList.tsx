import { Track } from "../../spotify/types/Track";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
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
                        <TrackItem track={item} key={item.id}/>
                    );
                })} 
            </div>

            {/* <AudioPlayer src='https://p.scdn.co/mp3-preview/6efdd411c0560a2ab611ad4bb376ab1ec1e342f8?cid=0ad60515fef0487baf824b155bbd7ed8'/>             */}
        </div>
    );
}

export default TrackList;