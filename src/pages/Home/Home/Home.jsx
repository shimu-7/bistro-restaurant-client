import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Category from "../category/Category";
import ExtraSection from "../extraSection/ExtraSection";
import { Helmet} from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant-Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <ExtraSection></ExtraSection>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;