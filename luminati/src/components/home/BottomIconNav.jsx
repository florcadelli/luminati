import React from "react";
import styles from "../../styles/home.module.css";
import { TiHome } from 'react-icons/ti';
import { BsSearch } from 'react-icons/bs';
import { HiUser } from 'react-icons/hi';
import { FiShoppingCart } from 'react-icons/fi';


function BottomIconNav() {
  return (
    <nav className={styles.navBottom}>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}><TiHome/></i>
        
      </a>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}><BsSearch/></i>
        
      </a>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}><HiUser/></i>
        
      </a>
      <a href="#" className={styles.nav__link}>
        <i className={styles.nav__icon}><FiShoppingCart/></i>
        
      </a>
      
    </nav>
  );
}

export default BottomIconNav;
