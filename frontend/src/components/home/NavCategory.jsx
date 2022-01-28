import React from "react";
import styles from "../../styles/home.module.css";
import { GiMirrorMirror } from "react-icons/gi";
import { GiTable } from "react-icons/gi";
import { GiSofa } from "react-icons/gi";
import { GiFlexibleLamp } from "react-icons/gi";
import { BiBed } from "react-icons/bi";
import { BiDrink } from "react-icons/bi";
import { GiFlowerPot } from "react-icons/gi";
import { GiBookshelf } from "react-icons/gi";
import { GiDesk } from "react-icons/gi";
import { GiCandleLight } from "react-icons/gi";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { BsFillBasketFill } from "react-icons/bs";
import { GiRunningShoe} from "react-icons/gi";
import { GrCoatCheck} from "react-icons/gr";

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
          <BsFillDoorOpenFill />
        </div>
        <span className={styles.nav__text}>Recibidores</span>
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
          <GrCoatCheck />
        </div>
        <span className={styles.nav__text}>Percheros</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <BiBed />
        </div>
        <span className={styles.nav__text}>Almohadones</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiRunningShoe />
        </div>
        <span className={styles.nav__text}>Zapateros</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <BiBed />
        </div>
        <span className={styles.nav__text}>Almohadones</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <BsFillBasketFill  />
        </div>
        <span className={styles.nav__text}>Canastos</span>
      </a>

      <a href="#" className={styles.topnav__link}>
        <div className={styles.topnav__icon}>
          <GiCandleLight />
        </div>
        <span className={styles.nav__text}>Velas</span>
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
