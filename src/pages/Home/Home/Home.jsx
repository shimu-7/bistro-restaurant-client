import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Category from "../category/Category";
import ExtraSection from "../extraSection/ExtraSection";


const Home = () => {
    return (
        <div>
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