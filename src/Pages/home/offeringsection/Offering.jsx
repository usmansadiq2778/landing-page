import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './style.scss';
import Fantasy from '../../../assets/Fantasy-Sports-Solution.webp';
import Support from '../../../assets/realmoneygames.webp';
import freetoplay from '../../../assets/Free-to-play.webp';
import Supportbating from '../../../assets/Sports-batting-solution.webp';

function Offering() {
    return (
        <div className='offering-main'>
            <ScrollAnimation
                animateIn='animate__zoomIn'
                animateOut='animate__fadeOut'
                initiallyVisible={false}
                delay={0}
            >
                <h1 className='rainbow-text'>Our Offerings</h1>
                <hr></hr>
            </ScrollAnimation>

            <div className='Fantasy'>
                <div className='FantasyText'>
                    <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOut='animate__fadeOut'
                        initiallyVisible={false}
                        delay={0}
                    >
                        <h3>Fantasy</h3> <h3>Sports Solutions</h3>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='animate__fadeIn'
                        animateOut='animate__fadeOut'
                        initiallyVisible={false}
                        delay={0}
                    >
                        <p>
                            Vinfotech is the leading provider of premium fantasy
                            sports technology and services to visionary
                            operators worldwide. Our unrelenting focus in
                            fantasy sports area ensures our partners have a
                            market leading platform to offer to their players
                        </p>
                    </ScrollAnimation>

                    <button className='learn-more-button'>Learn more</button>
                </div>
                <div className='fantasyimg'>
                    <img src={Fantasy} alt='' />
                </div>
            </div>
            <div className='Fantasy fantasy2'>
                <div className='fantasyimg'>
                    <img src={Support} alt='' />
                </div>
                <div className='FantasyText'>
                    <ScrollAnimation
                        initiallyVisible={false}
                        animateIn='animate__animated animate__bounceInRight'
                        delay={0} // Adjust the delay to control the speed
                        duration={0.5} // Adjust the duration to control the speed
                    >
                        <h3>Real Money Games</h3>
                    </ScrollAnimation>
                    <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOut='animate__fadeOut'
                        initiallyVisible={false}
                        delay={0}
                    >
                        <p>
                            Vinfotech is the leading provider of premium fantasy
                            sports technology and services to visionary
                            operators worldwide. Our unrelenting focus in
                            fantasy sports area ensures our partners have a
                            market leading platform to offer to their players
                        </p>
                    </ScrollAnimation>

                    <button className='learn-more-button'>Learn more</button>
                </div>
            </div>
            <div className='Fantasy fantasy3'>
                <div className='FantasyText'>
                    <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOut='animate__fadeOut'
                        initiallyVisible={false}
                        delay={0}
                    >
                        <h3>Free2Play Games</h3>
                    </ScrollAnimation>
                    <ScrollAnimation
                        initiallyVisible={false}
                        animateIn='animate__animated animate__bounceInLeft'
                        delay={0} // Adjust the delay to control the speed
                        duration={0.5} // Adjust the duration to control the speed
                    >
                        <p>
                            Take engagement to a whole new level, capture
                            invaluable fan data and maximise monetization
                            opportunities with free-to-play games
                        </p>
                        <button className='learn-more-button'>
                            Learn more
                        </button>
                    </ScrollAnimation>
                </div>
                <div className='fantasyimg'>
                    <img src={freetoplay} alt='' />
                </div>
            </div>
            <div className='Fantasy fantasy4'>
                <div className='fantasyimg'>
                    <img src={Supportbating} alt='' />
                </div>
                <div className='FantasyText'>
                    <ScrollAnimation
                        animateIn='animate__zoomIn'
                        animateOut='animate__fadeOut'
                        initiallyVisible={false}
                        delay={0}
                    >
                        <h3>Sports </h3> <h3>Betting Solutions</h3>
                        <p>
                            Our tailor-made approach to sportsbook development
                            ensures that as our customer, you have an
                            application that meets your requirements and you
                            don’t have to share revenues with anyone.
                        </p>
                        <button className='learn-more-button'>
                            Learn more
                        </button>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
}

export default Offering;
