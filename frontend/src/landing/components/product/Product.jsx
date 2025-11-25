import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
import Hero from "./Hero";

function Product() {
    return (
        <>
            <Hero />
            <LeftSection
                title="Kite"
                description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                imageUrl="./kite.png"
                tryDemo={"Try Demo"}
                googlePlay={true}
                learnMore={"Learn More"}
            />
            <RightSection
                imageUrl={"./console.png"}
                title="Console"
                description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                learnMore={"Learn More"}
            />
            <LeftSection
                title="Coin"
                description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                imageUrl="./coin.png"
                tryDemo={"Coin"}
                googlePlay={true}
                learnMore={false}
            />
            <RightSection
                imageUrl={"./kite-connect.svg"}
                title="Kite Connect API"
                description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                learnMore={"Kite Connect"}
            />
            <LeftSection
                title="Varsity Mobile"
                description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                imageUrl="./varsity.svg"
                tryDemo={false}
                googlePlay={true}
                learnMore={false}
            />
            <Universe />
        </>
    );
}

export default Product;
