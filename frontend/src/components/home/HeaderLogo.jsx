import React from "react";
import styles from "../../styles/home.module.css";
import { HiUser } from "react-icons/hi";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

function HeaderLogo() {
  return (
    <>
      <div className={styles.headerLogo}>
        <Link to="/luminati">
          <img src={require("../../img/logo-luminati.png")} alt="Logo" />
        </Link>
      </div>
      <div className={styles.headerLogoDesktop}>
        <Link to="/luminati">
          <img src={require("../../img/logo-luminati-desktop.png")} alt="Logo" />
        </Link>
        <div className={styles.headerNavDesktop}>
          <Link to="/formulario/login">
            <div className={styles.nav__icon}>
              <HiUser />
            </div>
          </Link>
          <Link to="/carrito">
            <div className={styles.nav__icon}>
              <FiShoppingCart />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeaderLogo;
