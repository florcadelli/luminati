import React from "react";
import styles from "../../styles/home.module.css";
import { BiCreditCard } from "react-icons/bi";
import { FiTruck } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

function HomeFooter() {
  return (
    <>
    <div className={styles.container__homefooter}>
      <div>
        <div className={styles.card__homefooter}>
          <BiCreditCard className={styles.icon__homefooter} />
          <p>Aceptamos todas las tarjetas.</p>
        </div>
        <div className={styles.card__homefooter}>
          <FiTruck className={styles.icon__homefooter} />
          <p> Entregas a todo el pais.</p>
        </div>
      </div>
      <div className={styles.card__homefooterContact}>
        <h4> Contacto</h4>

        <p> (0221) 15 36427868 </p>
        <p> Calle 40 n° 727 La Plata </p>
      </div>
      <div>
        <div className={styles.card__homefooter}>
          <FiInstagram className={styles.icon__homefooter} />
          <p> @luminati.decoracion.</p>
        </div>
        
      </div>

    </div>
          <div className={styles.card__homefooterCopyright}>
          <hr />
            <p>
              © Luminati Decoración 2022 | Desarrollado por Cadelli Divan Miloro.
            </p>
          </div>
          </>
  );
}

export default HomeFooter;
