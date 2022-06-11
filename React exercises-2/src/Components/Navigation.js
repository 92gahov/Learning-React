import React, { useState } from "react";
import hamMenu from "../Components/img/download.png";
import { Link } from 'react-router-dom';

function Navigation() {

  const [showMenu, setShowMenu] = useState(false);

  let menu
  let menuMask

  if (showMenu) {
    menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow">This is the menu
      <ul>
        <li>
          <Link to="/" className='text-blue-500' onClick={() => setShowMenu(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" className='text-blue-500' onClick={() => setShowMenu(false)}>About</Link>
        </li>
        <li>
          <Link to="/users" className='text-blue-500' onClick={() => setShowMenu(false)}>Users</Link>
        </li>
      </ul>
    </div>

    menuMask = <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
      onClick={() => setShowMenu(false)}></div>
  }


  return (
    <nav>
      <img src={hamMenu} alt="" className="w-12" onClick={() => setShowMenu(!showMenu)}></img>
      {menuMask}
      {menu}
    </nav>
  )
}

export default Navigation;