import React, { useContext } from 'react';
import Player from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayerContext from '../context/audio-player-context';

const AudioPlayer = () => {
    const { audioSrc, setAudioSrc } = useContext(AudioPlayerContext);

    return (
        <>
            {audioSrc != null && audioSrc != '' && (
                <div style={{position: 'fixed', bottom: 0, left: 0, width: '100%'}}>
                    <Player
                        autoPlay
                        src={audioSrc}
                        showJumpControls={false}
                    />
                </div>
            )}
        </>
    );
};

export default AudioPlayer;
