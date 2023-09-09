/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './style.scss';

function Product() {
    return (
        <div className='mainProducts'>
            <div className='Products'>
                <h1>Products & Services</h1>
                <ul>
                    <li>
                        <a href='#' className='navigation-link'>
                            * {'  '} Fantasy Sports
                        </a>
                    </li>
                    <p className='details'>
                        World’s best fantasy sports solution provider
                    </p>
                    <li>
                        <a href='#' className='navigation-link'>
                            * {'  '} Sports Betting
                        </a>
                    </li>
                    <p className='details'>Custom sportsbook development</p>
                    <li>
                        <a href='#' className='navigation-link'>
                            * {'  '} Free-to-Play Games
                        </a>
                    </li>
                    <p className='details'>Build a loyal fan base</p>
                </ul>
            </div>
            <div className='Rights'>
                <h1>What's right for me?</h1>
                <ul>
                    <li>
                        <a href='#' className='navigation-link'>
                            * {'  '} Brands
                        </a>
                    </li>
                    <p className='details'>
                        Convert sports fans to your loyal customers
                    </p>
                    <li>
                        <a href='#' className='navigation-link'>
                            * {'  '} iGaming Cos
                        </a>
                    </li>
                    <p className='details'>
                        Acquire & retain players like never before
                    </p>
                    <li>
                        <a href='#' className='navigation-link'>
                            * {'  '} Sports Leagues & Teams
                        </a>
                    </li>
                    <p className='details'>
                        Engage, grow & monetise your fanbase
                    </p>
                    <li>
                        <a href='#' className='navigation-link'>
                            * {'  '} Financial Institutions
                        </a>
                    </li>
                    <p className='details'>Have a fanbase of your own</p>
                    <li>
                        <a href='#' className='navigation-link'>
                            * {'  '} Fantasy Sports Operators
                        </a>
                    </li>
                    <p className='details'>
                        Start your journey from good to great
                    </p>
                </ul>
            </div>
        </div>
    );
}

export default Product;
