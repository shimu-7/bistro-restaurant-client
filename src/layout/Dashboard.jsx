import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">
                
                    <li className="flex ">
                    
                        <NavLink to="/dashboard/userHome"><FaHome />User Home</NavLink>
                    </li>
                    <li className="flex ">
                    
                        <NavLink to="/dashboard/reservation"><FaCalendar />Reservation</NavLink>
                    </li>
                    <li className="flex ">
                    
                        <NavLink to="/dashboard/cart"><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                    </li>
                    <li className="flex ">
                    
                        <NavLink to="/dashboard/review">
                            <FaAd></FaAd>
                            Review</NavLink>
                    </li>
                    <li className="flex ">
                    
                        <NavLink to="/dashboard/bookings">
                            <FaList></FaList>
                            My Bookings</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;