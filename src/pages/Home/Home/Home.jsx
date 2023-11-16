import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
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
        </div>
    );
};

export default Home;