import React,{ useState } from "react";
// import '../dist/css/main.css';
import { VscHome } from "react-icons/vsc";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { RiStore2Line,RiLineChartLine } from "react-icons/ri";
import { BiWalletAlt } from "react-icons/bi";

function Navbar(props) {
  const [navitem,Setnavitem] = useState(0);
  const activestyle = {
    left : navitem * 65 + 2
  }
  return (
    <nav className='mobile-navbar'>
      <div className="container">
        <div className="nav-active" style={activestyle}></div>
        <div className={`nav-itme ${navitem === 0 ? 'active':''}`} onClick={() => Setnavitem(0)}>
          <VscHome className="nav-itme-icon" />
          Home
        </div>
        <div className={`nav-itme ${navitem === 1 ? 'active':''}`}  onClick={() => Setnavitem(1)}>
          <RiStore2Line className="nav-itme-icon" />
          Home
        </div>
        <div className={`nav-itme ${navitem === 2 ? 'active':''}`} onClick={() => Setnavitem(2)}>
          <CgArrowsExchangeAlt className="nav-itme-icon" />
          Exchang
        </div>
        <div className={`nav-itme ${navitem === 3 ? 'active':''}`} onClick={() => Setnavitem(3)}>
          <RiLineChartLine className="nav-itme-icon" />
          Chart
        </div>
        <div className={`nav-itme ${navitem === 4 ? 'active':''}`} onClick={() => Setnavitem(4)}>
          <BiWalletAlt className="nav-itme-icon" />
          Wallet
        </div>
      </div>
    </nav>
  );
}

export default Navbar;