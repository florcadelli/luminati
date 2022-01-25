import React from "react";
import styles from "../../styles/home.module.css";
import { FiShoppingCart } from "react-icons/fi";

function Card() {
  return (
    <>
      <div className={styles.containerCard}>
        <img src={require("../../img/iluminacion01.jpg")} />
        <div className={styles.img__Carrito}>
          <FiShoppingCart />
        </div>
        <h3>Escritorio minimalista</h3>
        <div><p>$12.00</p></div>
      </div>
    </>
  );
}

export default Card;
