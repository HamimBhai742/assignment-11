import Banner from "./Banner";
import RecentQueries from "./RecentQueries";
import Slider from "./Slider";

const Home = () => {
    return (
        <div className="mt-28">
            <Slider></Slider>
            <Banner></Banner>
            <RecentQueries></RecentQueries>
        </div>
    );
};

export default Home;