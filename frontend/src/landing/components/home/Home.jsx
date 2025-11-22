import React from 'react';
import Navbar from '../../common/Navbar.jsx';
import OpenAccount from '../../common/OpenAccount.jsx';
import Footer from '../../common/Footer.jsx';

import Hero from './Hero';
import Stats from './Stats.jsx';
import Pricing from './Pricing.jsx';
import Education from './Education.jsx';

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </>
    );
}

export default Home;