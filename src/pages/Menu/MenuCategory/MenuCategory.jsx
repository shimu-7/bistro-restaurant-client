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
            
        </div>
    );
};

export default MenuCategory;