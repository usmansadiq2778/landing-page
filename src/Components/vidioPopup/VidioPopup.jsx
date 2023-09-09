/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import HeroVidio from '../../../src/assets/vedio.mp4';

import './style.scss';

const VideoPopup = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        // Check local storage for the playing state
        const savedIsPlaying = JSON.parse(localStorage.getItem('isPlaying'));
        if (savedIsPlaying !== null) {
            setIsPlaying(savedIsPlaying);
        }
    }, [isPlaying]);

    const handleVideoStart = () => {
        setIsPlaying(true);
        // Save playing state to local storage
        localStorage.setItem('isPlaying', JSON.stringify(true));
    };

    const handleVideoEnd = () => {
        setIsPlaying(false);
        // Save playing state to local storage
        localStorage.setItem('isPlaying', JSON.stringify(false));
    };
    return (
        <div className={`react-player`}>
            <ReactPlayer
                url={HeroVidio}
                playing={true}
                muted={true} // Set this to true
                width='100%'
                height='100%'
                loop={true}
                onPlay={handleVideoStart}
                onEnded={handleVideoEnd}
            />
            <div className='text-overlay'>
                <h1 className='rainbow-text'>Fantasy Sports </h1>
                <h1 className='rainbow-text'>Fan Engagement </h1>
                <h1 className='rainbow-text'>I Gaming </h1>
            </div>
        </div>
    );
};

export default VideoPopup;
