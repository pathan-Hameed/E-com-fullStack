import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {

  const [visible, setvisible] = useState(false);
  const {setShowSearch, getCartCount} = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5  font-medium">
      <Link to={'/'} className="cursor-pointer">
      <img src={assets.logo} className="w-36 " alt="logo" />
      </Link>

      <ul className="hidden sm:flex items-center gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1 " to="/">
          <p>HOME</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1 " to="/collection">
          <p>COLLECTION</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1 " to="/about">
          <p>ABOUT</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1 " to="/contact">
          <p>CONTACT</p>
          <hr className="w-2/4 h-[1.5px] border-none bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img
          onClick={()=>setShowSearch(true)}
          src={assets.search_icon}
          alt="search-icon"
          className="w-5 cursor-pointer"
        />

        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt="profile-icon"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="bg-slate-100 rounded w-32 flex flex-col gap-2 text-gray-500 px-5 py-3">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.cart_icon}
            alt="cart_icon"
          />
          <p className="absolute bottom-[-5px] right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img onClick={() => setvisible(true)} src={assets.menu_icon} alt="menu_icon" className="w-4 cursor-pointer sm:hidden" />
      </div>

      {/* side bar menu for small screen */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${visible ? "w-full" : "w-0"}`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setvisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
            <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="back_icon" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setvisible(false)} className="py-2 border pl-6" to={'/'}>HOME</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 border pl-6" to={'/collection'}>COLLECTION</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 border pl-6" to={'/about'}>ABOUT</NavLink>
          <NavLink onClick={() => setvisible(false)} className="py-2 border pl-6" to={'/contact'}>CONTACT</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
