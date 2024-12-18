import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import navLogo from '../../assets/Images/navLogo.png'
const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
    .then(() => {
      console.log('successful sign out');
    })
    .catch(error => {
      console.log('failed to sign out', error.message);
      
    })
  }
  const links = (
    <>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/'>Home</NavLink>
      </li>
    </>
  );
  return (
    <nav className="bg-[#08322f] text-white">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link>
          <img src={navLogo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-4">
          {user ? (
            <>
              <button onClick={handleSignOut} className="py-2 px-5 rounded bg-[#ffdd00] text-[#08322f] font-bold text-base">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/register">
                <span className="text-[#ffdd00] font-bold text-base underline hover:text-[#08322f]">
                  Register
                </span>
              </Link>
              <Link to="/signIn">
                <button className="py-2 px-5 rounded bg-[#ffdd00] text-[#08322f] font-bold text-base">
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
