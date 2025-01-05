import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";




const DashBoard = () => {
    const [cart ] = useCart();

    // TODO : get isAdmin value from the database 

    const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
        {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
              <FaHome></FaHome>
              Admin Home
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
              <FaUtensils></FaUtensils>
              Add Items
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
            <FaList></FaList>
              {/* <FaShoppingCart></FaShoppingCart> */}
              Manage Items
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              <FaBook></FaBook>
              Manage Bookings
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/dashboard/users">
              <FaUser></FaUser>
              All Users 
            </NavLink>
             </li>
            </>
            :
            <>
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
            </>
        }
        
    
    

          {/* divider */}
          {/* shared navlinks  */}
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
            <FaEnvelope></FaEnvelope>
              Contact
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
