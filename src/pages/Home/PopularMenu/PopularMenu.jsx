
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/menuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category==='popular');
    return (
        <div className="mt-10 mb-12">
            <SectionTitle
            heading={"popular MENU"}
            subHeading={"Check it out"}></SectionTitle>
            {/* {menu.length} */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    popular.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>

            <div className="flex justify-center">
            <button className=" btn btn-outline bottom-0 border-b-4 mt-4 ">View full menu</button>
            </div>
            
        </div>
    );
};

export default PopularMenu;