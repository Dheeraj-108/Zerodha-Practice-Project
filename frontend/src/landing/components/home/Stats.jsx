import React from 'react';

function Stats() {
    return (
        <>

            <div className='awards md:px-20 px-0 flex flex-col md:flex-row items-center justify-center'>
                <div className='awards-left px-5 md:w-1/2 w-fit m-0 md:mr-20'>
                    <h2 className='text-2xl py-5'>Trust with confidence</h2>
                    <p className='pt-5'>
                        <h3 className='text-xl py-5'>Customer-first always</h3>
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.
                    </p>

                    <p className='pt-5'>
                        <h3 className='text-xl py-5'>No spam or gimmicks</h3>
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>

                    <p className='pt-5'>
                        <h3 className='text-xl py-5'>The Zerodha universe</h3>
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <p className='pt-5'>
                        <h3 className='text-xl py-5'>Do better with money</h3>
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                <div className='awards-right md:w-1/2 md:mx-auto w-auto h-auto m-5'>
                    <img src="./ecosystem.png" alt="ecosystem image" className='py-10 md:w-200 md:h-150' />

                    <div className='flex justify-around gap-5'>
                        <a href="" className='text-blue-700 text-lg'>Explore Our Products &rarr;</a>
                        <a href="" className='text-blue-700 text-lg'>Try Kite demo &rarr;</a>
                    </div>

                </div>
            </div>

            <div className='press-logo w-full px-10'>
                <img src="./press-logos.png" alt="" className='py-15 md:mx-auto md:m-0' />
            </div>
        </>
    );
}

export default Stats;