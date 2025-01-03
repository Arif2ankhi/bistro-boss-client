import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import useCart from "../hooks/useCart";


const DashBoard = () => {
    const [cart ] = useCart();
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome></FaHome>
              User Home
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>
              Reservation
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>
              My Cart({cart.length})
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaAd></FaAd>
              Add a  Review
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaList></FaList>
              My Bookings
            </NavLink>
            
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/order/salad">
            <IoMenu></IoMenu>
              Menu
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/">
            <IoMenu></IoMenu>
              Home
            </NavLink>
            
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
