import React, {useState} from "react";
import css from "./Header.module.css";
import Logo from "../../assets/logo3.png";
import { IoCartOutline } from "react-icons/io5";
import { GoThreeBars } from "react-icons/go";
import "../Slider/Slider"
import "../Testimonials/Testimonials"
import "../Virtual/Virtual"
import "../Products/Products"

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
            <li><a href="#trendingSec">Trending</a></li>
            <li><a href="#demoSec">Demo</a></li>
            <li><a href="#productsSec">Products</a></li>
            <li><a href="#reviewsSec">Reviews</a></li>
            <li>ENG</li>
            {/* <li>Demo</li>
            <li>Products</li>
            <li>Reviews</li>
            <li>ENG</li> */}
          </ul>
        {/* </div> */}
        <input type="text" className={css.search} placeholder="Search" />
        <IoCartOutline className={css.cart} />
      </div>
    </div>
  );
};

export default Header;
