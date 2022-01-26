import React from "react";
import styles from "../../styles/home.module.css";
import { TiHome } from 'react-icons/ti';
import { HiUser } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';
import {Link} from 'react-router-dom';


function BottomIconNav() {
  return (
    <nav className={styles.navBottom}>
      <Link to="/" className={styles.nav__link}>
        <div className={styles.nav__icon}><TiHome/></div>
        
      </Link>

      <Link to="/formulario/login" className={styles.nav__link}>
        <div className={styles.nav__icon}><HiUser/></div>
        
      </Link>
      <Link to="/carrito" className={styles.nav__link}>
        <div className={styles.nav__icon}><FiShoppingCart/></div>
        
      </Link>
      
    </nav>
  );
}

export default BottomIconNav;
