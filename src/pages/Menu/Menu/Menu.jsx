import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";

import menu from '../../../assets/menu/banner3.jpg'
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";


const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant-Menu</title>
            </Helmet>
            <Cover img={menu} title={"our menu"} subTitle="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Menu;