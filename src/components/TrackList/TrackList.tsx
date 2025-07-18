import AudioPlayer from '../AudioPlayer/AudioPlayer';
import TrackItem from '../TrackItem/TrackItem';
import { TrackItem as TrackItemInterface } from '../../spotify/types/TrackItem';
import './TrackList.scss';
import { Track } from '../../deezer/types/Track';

interface IProps {
    tracks: Track[];
    playTrack: Function;
    playingTrack: Track | undefined;
}

const TrackList = ({ tracks, playTrack, playingTrack }: IProps) => {
    const clickHandler = (track: TrackItemInterface) => {
        playTrack(track);
    };

    return (
        <div className="track-list">
            <h2 className="list-title">Tracks</h2>
            <div className="list-container">
                {tracks.map((track, index) => {
                    return (
                        <TrackItem
                            track={track}
                            key={track.id}
                            index={index + 1}
                            playTrack={clickHandler}
                            isPlaying={playingTrack?.id === track.id}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default TrackList;
