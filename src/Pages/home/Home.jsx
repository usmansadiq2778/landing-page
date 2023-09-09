import React, { useState, useEffect } from 'react';
import './style.scss';
import HeroBanners from './heroBanners/HeroBanners';
import About from './about/About';
import Offering from './offeringsection/Offering';
import { BsWhatsapp } from 'react-icons/bs';
import Footer from '../../Components/Footer/Footer';
import Work from './work/Work';

function Home() {
    return (
        <div className='homepage'>
            <HeroBanners />
            <About />
            <Offering />

            <Work />
            <Footer />
        </div>
    );
}

export default Home;
