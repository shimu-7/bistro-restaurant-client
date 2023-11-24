import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart,  FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    //const isAdmin = true;
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu">

                    {
                        isAdmin ? <>
                            <li className="flex ">

                                <NavLink to="/dashboard/adminHome"><FaHome />Admin Home</NavLink>
                            </li>
                            <li className="flex ">

                                <NavLink to="/dashboard/addItem"><FaUtensils />Add Item</NavLink>
                            </li>
                            <li className="flex ">

                                <NavLink to="/dashboard/manageItems"><FaList />Manage Item</NavLink>
                            </li>
                            <li className="flex ">

                                <NavLink to="/dashboard/bookings">
                                <FaBook />
                                    Manage Bookings</NavLink>
                            </li>
                            <li className="flex ">

                                <NavLink to="/dashboard/users">
                                <FaUsers />
                                    All User</NavLink>
                            </li>
                        </> :
                            <>
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
                            </>
                    }
                    <div className="divider"></div>
                    <li className="flex ">

                        <NavLink to="/"><FaHome />Home</NavLink>
                    </li>
                    <li className="flex ">

                        <NavLink to="/order/salad"><FaSearch />Menu</NavLink>
                    </li>
                    <li className="flex ">

                        <NavLink to="/contact"><FaEnvelope />Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;