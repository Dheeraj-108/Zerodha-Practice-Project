import { Link } from 'react-router';

function Hero() {
    return (
        <>
            <div className="hero text-center mx-auto my-5 ">
                <div className='border-b mx-auto w-3/4 py-16 border-gray-300'>
                    <h1 className="text-3xl font-semibold py-4">Zerodha Products</h1>
                    <h2 className="text-xl text-gray-700">Sleek, modern, and intuitive trading platforms</h2>
                    <p className="text-lg text-gray-700 py-4">Check out our <Link to="/product" className="text-blue-700">investment offerings →</Link></p>
                </div>
            </div>
        </>
    )
}

export default Hero 