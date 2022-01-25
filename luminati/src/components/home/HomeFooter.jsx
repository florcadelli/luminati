import React from "react";
import styles from "../../styles/home.module.css";
import { BiCreditCard } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

function HomeFooter() {
  return (
    <div className={styles.container__homefooter}>
      <div className={styles.card__homefooter}>
        <p><BiCreditCard className={styles.icon__homefooter} />Aceptamos todas las tarjetas.</p>
        <p><FiTruck className={styles.icon__homefooter} /> Entregas a todo el pais.</p>
      </div>
      <div className={styles.card__homefooter}>
        <h4> Contacto</h4>
        <p>40 n° 727 La Plata</p>
        <p>(0221) 15 36427868</p>
      </div>
      <div className={styles.card__homefooter}>      
         <p><FiInstagram className={styles.icon__homefooter} />  @luminati.decoracion.</p>
      </div>
    </div>
  );
}

export default HomeFooter;
