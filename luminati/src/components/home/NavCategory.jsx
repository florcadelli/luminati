import React from "react";
import styles from "../../styles/home.module.css";
import { GiMirrorMirror } from "react-icons/gi";
import { GiTable } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import { GiFlexibleLamp } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { BiDrink } from "react-icons/bi";
import { GiFlowerPot } from "react-icons/gi";
import { GiBookshelf} from "react-icons/gi";

function NavCategory() {
  return (
    <nav className={styles.navScroll}>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <BiBed />
        </div>
        <span className={styles.nav__text}>Dormitorio</span>
      </a>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiMirrorMirror />
        </div>
        <span className={styles.nav__text}>Espejos</span>
      </a>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiTable />
        </div>
        <span className={styles.nav__text}>Mesas</span>
      </a>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiSofa />
        </div>
        <span className={styles.nav__text}>Asientos</span>
      </a>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiFlexibleLamp />
        </div>
        <span className={styles.nav__text}>Iluminación</span>
      </a>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <BiDrink />
        </div>
        <span className={styles.nav__text}>Mi bar</span>
      </a>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiFlowerPot />
        </div>
        <span className={styles.nav__text}>Macetas</span>
      </a>
      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiBookshelf />
        </div>
        <span className={styles.nav__text}>Estantes</span>
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
