import React from "react";
import styles from "../../styles/home.module.css";
import { HiUser } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";

function HeaderLogo() {
  return (
    <>
      <div className={styles.headerLogo}>
        <img src={require("../../img/logo-luminati.png")} alt="Logo" />
      </div>
      <div className={styles.headerLogoDesktop}>
        <img src={require("../../img/logo-luminati-desktop.png")} alt="Logo" />
        <div className={styles.headerNavDesktop}>
          <div className={styles.nav__icon}>
            <HiUser />
          </div>
          <div className={styles.nav__icon}>
            <FiShoppingCart />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderLogo;
