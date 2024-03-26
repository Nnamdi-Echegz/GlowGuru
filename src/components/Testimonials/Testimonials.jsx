import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
        <span>Still Doubting?</span>
        <span>
          Hear what our customers have to say about our products and services
        </span>
      </div>
      

      <img src={Hero} alt="" />

      <div className={css.container}>
        <span>100k</span><span>Happy Customers with us</span>
      </div>
      </div>
    </div>
  );
};

export default Testimonials;
