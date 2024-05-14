import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Faq from "./Faq";
import RecentQueries from "./RecentQueries";
import Slider from "./Slider";
import SomeProduct from "./SomeProduct";

const Home = () => {
    return (
        <div className="md:mt-28 mt-20 mx-3 md:mx-5">
            <Helmet><title>Home</title></Helmet>
            <Slider></Slider>
            <Banner></Banner>
            <RecentQueries></RecentQueries>
            <SomeProduct></SomeProduct>
            <Faq></Faq>
        </div>
    );
};

export default Home;