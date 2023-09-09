import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/headers/Header';
import Home from './Pages/home/Home';
import Product from './Pages/ProductPages/Product';
import Footer from './Components/Footer/Footer';
import { BsWhatsapp } from 'react-icons/bs';

function App() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/PRODUCTS' element={<Product />} />
                </Routes>
                <BsWhatsapp
                    onClick={scrollToTop}
                    id='myBtn'
                    title='WhatsApp'
                    className={isVisible ? 'visible' : ''}
                />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
