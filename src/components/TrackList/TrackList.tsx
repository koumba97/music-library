import { Track } from "../../spotify/types/Track";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import TrackItem from "../TrackItem/TrackItem";
import { TrackItem as TrackItemInterface } from "../../spotify/types/TrackItem";
import './TrackList.scss';

interface IProps {
    track: Track;
    playTrack: Function;
}

const TrackList = ({track, playTrack} : IProps) => {
    const clickHandler = (track: TrackItemInterface ) => {
        playTrack(track);
    };

    return (
        <div className="track-list">
            <h2>Tracks</h2>
            <div className="list-container">
               {track.items.map((item) => {
                    return (
                        <TrackItem track={item} key={item.id} playTrack={clickHandler}/>
                    );
                })} 
            </div>
        </div>
    );
}

export default TrackList;