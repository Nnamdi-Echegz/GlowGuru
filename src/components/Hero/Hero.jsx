import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Hero = () => {
  const transition = { duration: 3, type: "spring" };
  return (
    <div id="heroSec" className={css.container}>
      {/**Left container */}
      <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>

        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            {" "}
            We provide you with the best tested and trusted products for your
            skin. Refreshing and 0 harshness
          </span>
        </div>
      </div>

      {/** Middle Hro container */}
      <div className={css.wrapper}>
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "0rem" }}
          className={css.bluecircle}
          transition={transition}
        ></motion.div>


        <motion.img
          transition={transition}
          initial={{ bottom: "-2rem" }}
          whileInView={{ bottom: "0rem" }}
          src={HeroImg}
          alt=""
          width={600}
        />


        <motion.div 
        transition={transition}
        initial={{right: "4%"}}
        whileInView={{right: "2%"}}  className={css.cart2}>
          <RiShoppingBagFill />

          <div className={css.signup}>
            <span>Best Signup Offers</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>

      {/** Right container */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>800k</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>85K</span>
          <span>Satisfied Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
