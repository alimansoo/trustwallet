import React,{ useState } from "react";
// import '../dist/css/main.css';
import { HiHome,HiOutlineHome } from "react-icons/hi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiStore2Fill,RiStore2Line,RiLineChartLine } from "react-icons/ri";
import { IoWalletOutline,IoWalletSharp } from "react-icons/io5";
import { NavLink,useLocation } from "react-router-dom";

function Navbar(props) {
  const NavUrls = ['/','/markets','/exchange','/charts','/wallet'];
  const location = useLocation();
  const [navitem,Setnavitem] = useState(
    NavUrls.indexOf(location.pathname)
  );
  const activestyle = {
    display: navitem===-1?"none":"block",
    left : navitem * 65 + 2
  }
  return (
    <nav className='mobile-navbar'>
      <div className="container">
        <div className="nav-active" style={activestyle}></div>
        <NavLink to='/' className={`nav-itme`} onClick={() => Setnavitem(0)}>
          {
            navitem === 0 ? 
            <HiHome className="nav-itme-icon" />
            :<HiOutlineHome className="nav-itme-icon" />
          }
          Home
        </NavLink>
        <NavLink to='/markets' className={`nav-itme`}  onClick={() => Setnavitem(1)}>
          {
            navitem === 1 ? 
            <RiStore2Fill className="nav-itme-icon" />
            :<RiStore2Line className="nav-itme-icon" />
          }
          Market
        </NavLink>
        <NavLink to='/exchange' className={`nav-itme`} onClick={() => Setnavitem(2)}>
          <CgArrowsExchangeAlt className="nav-itme-icon" />
          Exchang
        </NavLink>
        <NavLink to='/charts' className={`nav-itme`} onClick={() => Setnavitem(3)}>
          <RiLineChartLine className="nav-itme-icon" />
          Chart
        </NavLink>
        <NavLink to='/wallet' className={`nav-itme`} onClick={() => Setnavitem(4)}>
          {
            navitem === 4 ? 
            <IoWalletSharp className="nav-itme-icon" />
            :<IoWalletOutline className="nav-itme-icon" />
          }
          Wallet
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;