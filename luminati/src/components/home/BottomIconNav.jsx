import React from "react";
import styles from "../../styles/home.module.css";
import { TiHome } from 'react-icons/ti';
import { HiUser } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';


function BottomIconNav() {
  return (
    <nav className={styles.navBottom}>
      <a href="#" className={styles.nav__link}>
        <div className={styles.nav__icon}><TiHome/></div>
        
      </a>

      <a href="#" className={styles.nav__link}>
        <div className={styles.nav__icon}><HiUser/></div>
        
      </a>
      <a href="#" className={styles.nav__link}>
        <div className={styles.nav__icon}><FiShoppingCart/></div>
        
      </a>
      
    </nav>
  );
}

export default BottomIconNav;
