import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo3.png";
import { IoCartOutline} from "react-icons/io5"

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>GlowGuru</span>
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Collections</li>
            <li>Brands</li>
            <li>New</li>
            <li>Sales</li>
            <li>ENG</li>
          </ul>
        </div>
        <input type="text" className={css.search} placeholder="Search" />
        <IoCartOutline className={css.cart}/>
      </div>
    </div>
  );
};

export default Header;
