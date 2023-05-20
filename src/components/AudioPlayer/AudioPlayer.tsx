import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faPause, faVolumeUp, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import './AudioPlayer.scss';

interface IProps {
    src: string;
}

const AudioPlayer = (props: IProps) => {
    const [audio, setAudio] = useState(new Audio(props.src));
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute] = useState(false);
    const [musicProgress, setMusicProgress] = useState(0);

    useEffect(() => {
        return () => {
            stopAudio();
        }
    }, []);

    audio.addEventListener('timeupdate', () => {
        const audioPercentProgress = (100 / audio.duration) * audio.currentTime;
        setMusicProgress(audioPercentProgress);
    });

    const stopAudio = () => {
        audio.pause();
        setAudio(audio);
    };

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audio.pause() : audio.play();
    };

    function toggleSound() {
        setIsMute(!isMute);
        isMute ? (audio.muted = false) : (audio.muted = true);
    }

    const changeMusicProgress = (event: any) => {
        setMusicProgress(event.target.value);
        const percentagePosition = (audio.duration / 100) * event.target.value;
        audio.currentTime = percentagePosition;
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
            <div className="controls">
                <PlayerButton />
                <input
                    type="range"
                    className="timeline"
                    max="100"
                    value={musicProgress}
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
