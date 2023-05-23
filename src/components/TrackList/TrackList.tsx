import { Track } from "../../spotify/types/Track";
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import TrackItem from "../TrackItem/TrackItem";
import { TrackItem as TrackItemInterface } from "../../spotify/types/TrackItem";
import './TrackList.scss';

interface IProps {
    track: Track;
    playTrack: Function;
    playingTrack: string | undefined;
}

const TrackList = ({track, playTrack, playingTrack} : IProps) => {
    const clickHandler = (track: TrackItemInterface ) => {
        playTrack(track);
    };

    return (
        <div className="track-list">
            <h2 className="list-title">Tracks</h2>
            <div className="list-container">
               {track.items.map((item, index) => {
                    return (
                        <TrackItem track={item} key={item.id} index={index+1} playTrack={clickHandler} isPlaying={playingTrack == item.id}/>
                    );
                })} 
            </div>
        </div>
    );
}

export default TrackList;