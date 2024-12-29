import { Link } from "react-router-dom";


const Navbar = () => {

  const navOptions = 
    <>
    
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu </Link></li>
        <li><Link to="/order/salad">Order Food </Link></li>
    
    
        

      
    </>
  

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1"> */}
            {navOptions}
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
