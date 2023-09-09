import React from 'react';
import './style.scss';
import Img1 from '../../../assets/cgfhijqq1mp14l26gudg.jpg';
import fxlogo from '../../../assets/fx-logo.png';
import fantasychance from '../../../assets/fantasyXchange-work.webp';
import fantasyKoora from '../../../assets/Kooora_fantasy_logo.png';
import MplLogo from '../../../assets/cs-mpl-logo.png';
import BenLogo from '../../../assets/betsperts-slides.png';
import Chalanges from '../../../assets/mtv-home-page.png';
import ChalangesImg from '../../../assets/cs-MTV.webp';
import Mplbg from '../../../assets/photo-1629217855633-79a6925d6c47.jpg';
import footbalg from '../../../assets/football-ground-measurement.jpg';
import kooora from '../../../assets/cs-kooora.webp';
import Mpl from '../../../assets/cs-mpl.webp';
import Betstok from '../../../assets/cs-Betsperts.webp';
import Meeting from '../../../assets/happy-manager-leads-a-meeting-in-the-office-scaled.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

export default function Work() {
    return (
        <div className='workmain'>
            <div className='Work'>
                <div className='backgroundimg'>
                    <img src={Img1} alt='' />
                </div>

                <h1>Our Work</h1>
                <div className='layer'>
                    <div className='imglayer'>
                        <img src={fantasychance} alt='' />
                    </div>
                    <div className='text'>
                        <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOut='animate__fadeOut'
                            initiallyVisible={false}
                            delay={0}
                        >
                            <img src={fxlogo} alt='' />
                            <h3>
                                Collect player cards, build and manage virtual
                                teams in a never before free-to-play NFT fantasy
                                football game
                            </h3>
                            <button className='button-73' role='button'>
                                View Project - {'>'}
                            </button>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className='Work'>
                <div className='backgroundimg'>
                    <img src={footbalg} alt='' />
                </div>
                {/* <h1>Our Work</h1> */}
                <div className='layer layer2'>
                    <div className='imglayer'>
                        <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOut='animate__fadeOut'
                            initiallyVisible={false}
                            delay={0}
                        >
                            <img src={kooora} alt='' />
                        </ScrollAnimation>
                    </div>

                    <div className='text'>
                        <img src={fantasyKoora} alt='' />
                        <h3>
                            The most popular pan-Arab sports news website added
                            fantasy soccer to boost sponsor revenues
                        </h3>
                        <button className='button-73' role='button'>
                            View Project - {'>'}
                        </button>
                    </div>
                </div>
            </div>
            <div className='Work'>
                <div className='backgroundimg'>
                    <img src={Mplbg} alt='' />
                    <div className='opacity-layer2'></div>
                </div>
                {/* <h1>Our Work</h1> */}
                <div className='layer layer2'>
                    <div className='imglayer'>
                        <img src={Mpl} alt='' />
                    </div>
                    <div className='text'>
                        <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOut='animate__fadeOut'
                            initiallyVisible={false}
                            delay={0}
                        >
                            <img src={MplLogo} alt='' />
                            <h3>
                                Sports fantasy solution for India’s biggest
                                gaming platform with a user base of 25+ million
                            </h3>
                            <button className='button-73' role='button'>
                                View Project - {'>'}
                            </button>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className='Work'>
                <div className='backgroundimg'>
                    <img src={Mplbg} alt='' />
                </div>
                <div className='opacity-layer'></div>
                {/* <h1>Our Work</h1> */}
                <div className='layer layer2'>
                    <div className='imglayer'>
                        <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOut='animate__fadeOut'
                            initiallyVisible={false}
                            delay={0}
                        >
                            <img src={Betstok} alt='' />
                        </ScrollAnimation>
                    </div>
                    <div className='text'>
                        <img src={BenLogo} alt='' />
                        <h3>
                            Bespoke development of a sports betting tips and
                            community platform that attracted big investors
                        </h3>
                        <button className='button-73' role='button'>
                            View Project - {'>'}
                        </button>
                    </div>
                </div>
            </div>
            <div className='Work'>
                <div className='backgroundimg meet'>
                    <img src={Meeting} alt='' />
                </div>
                <div className='opacity-layer metlaye'></div>

                {/* <h1>Our Work</h1> */}
                <div className='layer layer2'>
                    <div className='imglayer'>
                        <img src={ChalangesImg} alt='' />
                    </div>
                    <div className='text'>
                        <ScrollAnimation
                            animateIn='animate__zoomIn'
                            animateOut='animate__fadeOut'
                            initiallyVisible={false}
                            delay={0}
                        >
                            <img src={Chalanges} alt='' />

                            <h3>
                                A reality TV fantasy game was introduced to
                                boost the TRP of a TV show
                            </h3>
                            <button className='button-73' role='button'>
                                View Project - {'>'}
                            </button>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
}
