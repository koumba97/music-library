import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faPause,
    faVolumeUp,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';
import './AudioPlayer.scss';
import { Track } from '../../deezer/types/Track';

interface IProps {
    track: Track | undefined;
}

const AudioPlayer = ({ track }: IProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | undefined>(undefined);
    const [isMute, setIsMute] = useState(false);
    const [musicProgress, setMusicProgress] = useState(0);
    useEffect(() => {
        if (track && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.load();
            audioRef.current.play();
            setIsPlaying(true);
            setPreviewUrl(track.preview);
        }
    }, [track]);

    audioRef.current?.addEventListener('timeupdate', () => {
        if (audioRef.current) {
            const audioPercentProgress =
                (100 / audioRef.current.duration) *
                audioRef.current.currentTime;
            setMusicProgress(audioPercentProgress);
        }
    });

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
        if (audioRef.current) {
            isPlaying ? audioRef.current.pause() : audioRef.current.play();
        }
    };

    function toggleSound() {
        setIsMute(!isMute);
        if (audioRef.current) {
            isMute
                ? (audioRef.current.muted = false)
                : (audioRef.current.muted = true);
        }
    }

    return (
        <div className="audio-player">
            <p className="track-name">
                {track?.title} - {track?.artist.name}
            </p>
            <audio controls ref={audioRef}>
                <source src={previewUrl} type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default AudioPlayer;
