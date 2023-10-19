import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/Auth";


const Nav = () => {
  const {user,logOut}=useContext(AuthContext)
    const link=<>
     <li><NavLink to='/' className="tab tab-bordered ">Home</NavLink> </li>
     <li><NavLink to='/AddProduct' className="tab tab-bordered">Add product</NavLink> </li>
     <li><NavLink to='/cart' className="tab tab-bordered">Cart</NavLink> </li>
     <li><NavLink to='/register' className="tab tab-bordered">Register</NavLink> </li>
     
    </>
    const handleLogOut = () => {
      logOut();
    };
    return (
        <div className="mx-1 mt-2">
         <div className="navbar   bg-slate-400 rounded-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-error lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
        {link}
      </ul>
    </div>
    <img src="https://i.ibb.co/JtLx4tW/logo-design-technology-global-computer-network-vector-34214719-removebg-preview.png" className="h-[70px]"></img>
    <p>Gizmo Tech World</p>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
      {link}
    </ul>
  </div>
  {/*dynamic logging btn */}
  <div className="navbar-end">
  {
    user?<div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img src={user.photoURL} alt={user.displayName} />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li className="text-[40px] font-semibold"><p>{user.displayName}</p></li>
    
    
    <li><button className="btn btn-error btn-sm"  onClick={handleLogOut}>Logout</button></li>
    </ul>
  </div>:
  <Link to='/login'>
  <button className="btn glass">Login</button>
  </Link>
  }

    
  </div>
</div>
        </div>
    );
};

export default Nav;