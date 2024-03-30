import React, {useState} from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo3.png";
import { IoCartOutline } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true)

  const toggleMenu = () => {
    setShowMenu((ShowMenu)=>!ShowMenu)
  }
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>GlowGuru</span>
      </div>

      <div className={css.right}>
        <div className={css.bars} onClick={toggleMenu}>
          <GoThreeBars />
        </div>
        {/* <div className={css.menu} > */}
          <ul className={css.menu} style={{display: ShowMenu? 'inherit': 'none'}}>
            <li>Trending</li>
            <li>Demo</li>
            <li>Products</li>
            <li>Reviews</li>
            <li>ENG</li>
          </ul>
        {/* </div> */}
        <input type="text" className={css.search} placeholder="Search" />
        <IoCartOutline className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
