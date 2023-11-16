import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item=>item.category==='popular');
            setMenu(popularItems)
        })
    },[])
    return (
        <div className="mt-10 mb-12">
            <SectionTitle
            heading={"popular MENU"}
            subHeading={"Check it out"}></SectionTitle>
            {/* {menu.length} */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    menu.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            
        </div>
    );
};

export default PopularMenu;