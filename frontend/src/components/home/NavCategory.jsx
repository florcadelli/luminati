import React from "react";
import styles from "../../styles/home.module.css";

import { BiDrink } from "react-icons/bi";
import { GiMirrorMirror, GiTable, GiSofa, GiFlexibleLamp, GiFlowerPot, GiBookshelf, GiHanger, GiRunningShoe, GiCandleLight, GiDesk } from "react-icons/gi";





function NavCategory() {
  return (
    <nav className={styles.navScroll}>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiFlexibleLamp />
        </div>
        <span className={styles.nav__text}>Iluminación</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiDesk />
        </div>
        <span className={styles.nav__text}>Escritorios</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiTable />
        </div>
        <span className={styles.nav__text}>Mesas</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <BiDrink />
        </div>
        <span className={styles.nav__text}>Bares</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiBookshelf />
        </div>
        <span className={styles.nav__text}>Estanterías</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiFlowerPot />
        </div>
        <span className={styles.nav__text}>Macetas</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiMirrorMirror />
        </div>
        <span className={styles.nav__text}>Espejos</span>
      </a>



      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiHanger />
        </div>
        <span className={styles.nav__text}>Percheros</span>
      </a>


      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiRunningShoe />
        </div>
        <span className={styles.nav__text}>Zapateros</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiCandleLight/>
        </div>
        <span className={styles.nav__text}>Deco</span>
      </a>


      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiSofa />
        </div>
        <span className={styles.nav__text}>Asientos</span>
      </a>






      {/* <div className={styles.item}>
        <BiBed />
        <h2 className={styles.itemTitle}>Dormitorio</h2>
      </div>
      <div className={styles.item}>
        <GiMirrorMirror />
        <h2 className={styles.itemTitle}>Espejos</h2>
      </div>
      <div className={styles.item}>
        <GiTable />
        <h2 className={styles.itemTitle}>Mesas</h2>
      </div>
      <div className={styles.item}>
        <GiSofa />
        <h2 className={styles.itemTitle}>Asientos</h2>
      </div>
      <div className={styles.item}>
        <GiFlexibleLamp />
        <h2 className={styles.itemTitle}>Iluminación</h2>
      </div> */}
    </nav>
  );
}

export default NavCategory;
