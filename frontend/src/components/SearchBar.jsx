import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { useLocation } from "react-router-dom";

function SearchBar() {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const location = useLocation();
    const [visible, setvisible] = useState(false);

    useEffect(()=> {
        if(location.pathname.includes("collection")) {
            setvisible(true);
        } else {
            setvisible(false);
        }
    },[location])

  return showSearch && visible ? (
    <div className="border-t border-b text-center bg-gray-50">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-1 mx-3 my-4 rounded-full w-3/4 sm:w-1/2">
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className="flex-1 outline-none bg-inherit text-sm" type="text" placeholder="search here" id="searchBar" />
        <img className="w-4" src={assets.search_icon} alt="search_icon" />
      </div>
      <img onClick={()=>setShowSearch(false)} className="inline w-4 cursor-pointer" src={assets.cross_icon} alt="cross_buttom" />
    </div>
  ) : null;
}

export default SearchBar;
