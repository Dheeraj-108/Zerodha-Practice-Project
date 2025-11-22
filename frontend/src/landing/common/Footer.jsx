import React from 'react';

function Footer() {
    return (
        <footer className='bg-gray-50 pt-8 sm:pt-12 md:pt-16 lg:pt-20 border-t-2 border-gray-200 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6 lg:gap-8'>
                <div className='col-span-1 sm:col-span-2 lg:col-span-1'>
                    <img src="./zerodha-logo.svg" alt="Zerodha Logo" className='w-40 h-6 mb-6' />

                    <div className='flex flex-col border-b-2 border-gray-300 pb-6 text-gray-500'>
                        <p className='text-black text-xs sm:text-[0.78rem] py-4 sm:py-6'>
                            &copy; 2010 - {new Date().getFullYear()} Zerodha Broking Ltd.<br /> All rights reserved.
                        </p>

                        <div className='flex gap-4 flex-wrap'>
                            <i className="fa-brands fa-x-twitter text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition-colors duration-200"></i>
                            <i className="fa-brands fa-square-facebook text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition-colors duration-200"></i>
                            <i className="fa-brands fa-instagram text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition-colors duration-200"></i>
                            <i className="fa-brands fa-linkedin-in text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition-colors duration-200"></i>
                        </div>
                    </div>

                    <div className='py-5 text-gray-500 flex gap-4'>
                        <i className="fa-brands fa-youtube text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition-colors duration-200"></i>
                        <i className="fa-brands fa-whatsapp text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition-colors duration-200"></i>
                        <i className="fa-brands fa-telegram text-lg sm:text-xl cursor-pointer hover:text-gray-700 transition-colors duration-200"></i>
                    </div>
                </div>

                <div className='col-span-1'>
                    <h1 className='text-lg sm:text-xl font-semibold py-2'>Account</h1>
                    <ul className='space-y-1'>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Open demat account</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Minor demat account</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>NRI demat account</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Commodity</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Dematerialisation</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Fund transfer</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>MTF</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Referral program</a></li>
                    </ul>
                </div>

                <div className='col-span-1'>
                    <h1 className='text-lg sm:text-xl font-semibold py-2'>Support</h1>
                    <ul className='space-y-1'>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Contact us</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Support portal</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>How to file a complaint?</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Status of your complaints</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Bulletin</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Circular</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Z-Connect blog</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Downloads</a></li>
                    </ul>
                </div>

                <div className='col-span-1'>
                    <h1 className='text-lg sm:text-xl font-semibold py-2'>Company</h1>
                    <ul className='space-y-1'>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>About</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Philosophy</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Press & media</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Careers</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Zerodha Cares (CSR)</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Zerodha.tech</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Open source</a></li>
                    </ul>
                </div>

                <div className='col-span-1'>
                    <h1 className='text-lg sm:text-xl font-semibold py-2'>Quick Links</h1>
                    <ul className='space-y-1'>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Upcoming IPOs</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Brokerage charges</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Market holidays</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Economic calendar</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Calculators</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Markets</a></li>
                        <li><a href="" className='text-gray-500 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base'>Sectors</a></li>
                    </ul>
                </div>
            </div>

            <div className='max-w-7xl mx-auto flex flex-col pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8'>
                <p className='text-[0.65rem] sm:text-[0.7rem] md:text-xs text-gray-500 py-1 leading-relaxed'>
                    Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
                </p>

                <p className='text-[0.65rem] sm:text-[0.7rem] md:text-xs text-gray-500 py-1 leading-relaxed'>
                    Investments in securities market are subject to market risks; read all the related documents carefully before investing.
                </p>

                <p className='text-[0.65rem] sm:text-[0.7rem] md:text-xs text-gray-500 py-1 leading-relaxed'>
                    Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
                </p>

                <p className='text-[0.65rem] sm:text-[0.7rem] md:text-xs text-gray-500 py-1 leading-relaxed'>
                    India's largest broker based on networth as per NSE. NSE broker factsheet
                </p>

                <p className='text-[0.65rem] sm:text-[0.7rem] md:text-xs text-gray-500 py-1 leading-relaxed'>
                    "Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
                </p>

                <p className='text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed pt-6 sm:pt-8 text-center border-t border-gray-300 mt-6'>
                    &copy; {new Date().getFullYear()} Zerodha Clone. All rights reserved. | Dheeraj Goswami
                </p>
            </div>
        </footer>
    );
}

export default Footer;