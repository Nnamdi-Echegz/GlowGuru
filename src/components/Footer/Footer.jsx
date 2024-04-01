import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo3.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  LinkIcon,
  UsersIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" />
          <span>GlowGuru</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>111 north avenue, H2E 8F1, Ottawa, Ontario</span>
            </span>

            <span className={css.pngLine}>
              {" "}
              <PhoneIcon className={css.icon} />
              <a href="tel:343-227-9012">343-227-9012</a>
            </span>

            <span className={css.pngLine}>
              <InboxIcon className={css.icon} />
              <a href="mailto:glowguru@yahoo.com">glowguru@yahoo.com</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              <span>Sign Up</span>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">About us</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Copyright 2024 by GlowGuru, Inc.</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
