import React from 'react';
import './style.scss';
import Img from '../../../assets/about-us-item.png';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

function About() {
    return (
        <div className='aboutSection'>
            <div className='aboutText '>
                <ScrollAnimation
                    initiallyVisible={false}
                    animateIn='animate__animated animate__bounceInLeft'
                    delay={0} // Adjust the delay to control the speed
                    duration={0.5} // Adjust the duration to control the speed
                >
                    <h3>
                        {' '}
                        We are the leading provider of premium fantasy sports,
                        fan engagement and iGaming technology and services to
                        visionary operators worldwide
                    </h3>
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='animate__zoomIn'
                    animateOut='animate__fadeOut'
                    initiallyVisible={false}
                    delay={0} // Optional: Adjust the delay if needed
                >
                    <p>
                        Vinfotech is the partner you can trust to create
                        outstanding audience engagement solutions by developing
                        exciting games around the largest sports tournaments in
                        the world and white label it for your brand.
                    </p>
                </ScrollAnimation>

                <br />
                <button>Know more about us - {'>'}</button>
            </div>
            <img className='aboutImg' src={Img} alt='' />
        </div>
    );
}

export default About;
