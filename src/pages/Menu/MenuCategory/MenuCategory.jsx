import { Link } from "react-router-dom";
import Cover from "../../shared/Cover/Cover";
import MenuItem from "../../shared/menuItem/MenuItem";



const MenuCategory = ({items,title,coverImg, subTitle}) => {
    return (
        <div className="">
            {
                title && <Cover img={coverImg} title={title} subTitle={subTitle}></Cover>
            }
            <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {
                    items.map(item=> <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <Link className="flex justify-center mb-5" to={`/order/${title}`}>
            <button className="btn btn-outline bottom-0 border-b-4">Order Now</button>
            </Link>
            
        </div>
    );
};

export default MenuCategory;