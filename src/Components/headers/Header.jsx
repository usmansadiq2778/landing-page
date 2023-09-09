/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { SlMenu } from 'react-icons/sl';
import { VscChromeClose } from 'react-icons/vsc';
import { BsWhatsapp } from 'react-icons/bs';

import { useNavigate, useLocation } from 'react-router-dom';

import './style.scss';

import ContantWrappar from '../contantWrappar/contantWrappar';
import logo from '../../assets/vinfotech-logo.jpg';

const Header = () => {
    const [show, setShow] = useState('top');
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);

    const [menuColorChange, setMenuColorChange] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const controlNavbar = () => {
        // console.log(window.pageYOffset);
        if (window.pageYOffset > 150) {
            if (window.pageYOffset > lastScrollY && !mobileMenu) {
                setShow('hide');
            } else {
                setShow('show');
            }
        } else {
            setShow('top');
        }
        setLastScrollY(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const openMobileMenu = () => {
        setMobileMenu(true);
        setMenuColorChange(true);
        setShow('show');
        navigate(`/PRODUCTS`);

        // setShow('show');
    };

    const navigationHandler = (type) => {
        navigate(`/${type}`);
        setMobileMenu(false);
    };
    const navigationHandlerHomebtn = () => {
        navigate(`/`);
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
            <ContantWrappar>
                <div
                    className='logo'
                    onClick={() => navigationHandlerHomebtn()}
                >
                    <img src={logo} alt='' />
                </div>
                <ul
                    className={`menuItems ${
                        menuColorChange ? 'menuColorChange' : ''
                    }`}
                >
                    <li
                        className={`menuItem ${
                            show === 'show'
                                ? 'show'
                                : show === 'hide'
                                ? 'hide'
                                : 'top'
                        }`}
                        onClick={() => navigationHandler('PRODUCTS')}
                    >
                        PRODUCTS & SERVICES
                    </li>
                    <li
                        className={`menuItem ${
                            show === 'show'
                                ? 'show'
                                : show === 'hide'
                                ? 'hide'
                                : 'top'
                        }`}
                        onClick={() => navigationHandler('WORK')}
                    >
                        WORK
                    </li>
                    <li
                        className={`menuItem ${
                            show === 'show'
                                ? 'show'
                                : show === 'hide'
                                ? 'hide'
                                : 'top'
                        }`}
                        onClick={() => navigationHandler('ABOUT')}
                    >
                        ABOUT
                    </li>
                    <li
                        className={`menuItem ${
                            show === 'show'
                                ? 'show'
                                : show === 'hide'
                                ? 'hide'
                                : 'top'
                        }`}
                        onClick={() => navigationHandler('Contact')}
                    >
                        Contact
                    </li>
                    <li
                        className={`menuItem btn ${
                            show === 'show'
                                ? 'show'
                                : show === 'hide'
                                ? 'hide'
                                : 'top'
                        }`}
                        onClick={() => navigationHandler('Start a Project')}
                    >
                        Start a Project
                    </li>
                </ul>
                <div
                    className={`mobileMenuItem
                         ${
                             show === 'show'
                                 ? 'show'
                                 : show === 'hide'
                                 ? 'hide'
                                 : 'top'
                         }
                        `}
                >
                    {mobileMenu ? (
                        <VscChromeClose
                            onClick={() => setMobileMenu(false)}
                            className={`${
                                show === 'show'
                                    ? 'show'
                                    : show === 'hide'
                                    ? 'hide'
                                    : 'top'
                            }`}
                        />
                    ) : (
                        <SlMenu
                            onClick={openMobileMenu}
                            className={`${
                                show === 'show'
                                    ? 'show'
                                    : show === 'hide'
                                    ? 'hide'
                                    : 'top'
                            }`}
                        />
                    )}
                    <footer>{/* <BsWhatsapp className='myBtn' /> */}</footer>
                </div>
            </ContantWrappar>
        </header>
    );
};

export default Header;
