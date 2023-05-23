import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faPause, faVolumeUp, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import './AudioPlayer.scss';
import { TrackItem } from '../../spotify/types/TrackItem';

interface IProps {
    track: TrackItem | null;
}

const AudioPlayer = ({track}: IProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const [musicProgress, setMusicProgress] = useState(0);

    useEffect(() => {
        return () => {
            stopAudio();
        }
    }, []);

    useEffect(() => {
        if(track){
            stopAudio();
            audioRef.current?.play();
            audioRef.current!.volume = 0.1;
            setIsPlaying(true);
        }
    }, [track?.preview_url]);

    audioRef.current?.addEventListener('timeupdate', () => {
        if(audioRef.current) {
            const audioPercentProgress = (100 / audioRef.current.duration) * audioRef.current.currentTime;
            setMusicProgress(audioPercentProgress);
        }
    });

    const stopAudio = () => {
        if(audioRef.current){
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        if(audioRef.current){
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
        }
    };

    function toggleSound() {
        setIsMute(!isMute);
        if(audioRef.current){
            isMute ? (audioRef.current.muted = false) : (audioRef.current.muted = true);
        }
      
    }

    const changeMusicProgress = (event: any) => {
        setMusicProgress(event.target.value);
        if(audioRef.current){
           const percentagePosition = (audioRef.current.duration / 100) * event.target.value;
            audioRef.current!.currentTime = percentagePosition; 
        }
        
    };

    const PlayerButton = () => {
        return (
            <button className="player-button" onClick={toggleAudio}>
                {isPlaying ? <FontAwesomeIcon icon={faPause} size="lg"/> : <FontAwesomeIcon icon={faPlay} size="lg"/>}
            </button>
        );
    };

    const SoundButton = () => {
        return (
            <button className="sound-button" onClick={toggleSound}>
                {isMute ? <FontAwesomeIcon icon={faVolumeXmark} size="lg"/> : <FontAwesomeIcon icon={faVolumeUp} size="lg"/>}
            </button>
        );
    };

    return (
        <div className="audio-player">

            <audio src={track?.preview_url} ref={audioRef} />
            <p className='track-name'>{track?.name} - {track ? track.artists[0].name : null}</p>
            <div className="controls">
                <PlayerButton />
                <input
                    type="range"
                    className="timeline"
                    max="100"
                    value={musicProgress ? musicProgress : 0}
                    onChange={changeMusicProgress}
                    style={{ backgroundSize: musicProgress + '%' }}
                />
                <SoundButton />
            </div>
        </div>
    );
};

const SoundIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#3D3132"
        >
            <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                clipRule="evenodd"
            />
        </svg>
    );
};
const MuteIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="#3D3132"
        >
            <path
                fillRule="evenodd"
                d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
        </svg>
    );
};

export default AudioPlayer;
