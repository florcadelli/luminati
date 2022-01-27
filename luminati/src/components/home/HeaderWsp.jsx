import React from "react";
import styles from "../../styles/home.module.css";
import { RiWhatsappFill } from "react-icons/ri";

function HeaderWsp() {
  return (
    <div className={styles.container__btn__wsp}>
      <a
        href="http://api.whatsapp.com/send?phone=1136427868"
        className={styles.btn__wsp}
        target="_blank"
      >
        <RiWhatsappFill />
      </a>
    </div>
  );
}

export default HeaderWsp;
