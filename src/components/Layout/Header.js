import React from 'react';
import Hero from './Hero';
import Navbar from '../Navigation/Navbar'

import './Header.css';

const header = () => {
    return (
        <header>
            <Navbar />
            <Hero />
        </header>
    );
};

export default header;