/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import './style.scss';
import ReactPlayer from 'react-player';
import ContantWrappar from '../../../Components/contantWrappar/contantWrappar';

import HeroVidio from '../../../assets/vedio.mp4';
import VideoPopup from '../../../Components/vidioPopup/VidioPopup';

function HeroBanners() {
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
        <div className='heroBanner'>
            <VideoPopup />
        </div>
    );
}

export default HeroBanners;
