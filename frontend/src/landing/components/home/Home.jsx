import React from 'react';
import OpenAccount from '../../common/OpenAccount.jsx';

import Hero from './Hero';
import Stats from './Stats.jsx';
import Pricing from './Pricing.jsx';
import Education from './Education.jsx';

function Home() {
    return (
        <>
            <Hero />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
        </>
    );
}

export default Home;