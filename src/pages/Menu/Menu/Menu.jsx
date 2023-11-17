import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

import menuImage from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'



const Menu = () => {
    const [menu] = useMenu();
    const offer = menu.filter(item=>item.category==='offered')
    const dessert = menu.filter(item=>item.category==='dessert')
    const salad = menu.filter(item=>item.category==='salad')
    const pizza = menu.filter(item=>item.category==='pizza')
    const soup = menu.filter(item=>item.category==='soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss Restaurant-Menu</title>
            </Helmet>
            <Cover img={menuImage} title={"our menu"} subTitle="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <SectionTitle heading={"TODAY'S OFFER"} subHeading={"Don't miss"}></SectionTitle>
            <MenuCategory items={offer}></MenuCategory>
            <MenuCategory items={dessert} coverImg={dessertImg} title="DESSERTS" subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></MenuCategory>

            <MenuCategory
            items={pizza}
            title="pizza"
            coverImg={pizzaImg}
            subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            <MenuCategory
            items={salad}
            title="salad"
            coverImg={saladImg}
            subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>

            <MenuCategory
            items={soup}
            title="soup"
            coverImg={soupImg}
            subTitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            ></MenuCategory>
            
        </div>
    );
};

export default Menu;