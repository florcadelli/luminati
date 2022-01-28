import React from "react";
import styles from "../../styles/forms-styles/successfulForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const SuccessfulForm = ({ text }) => {
  return (
    <div className={styles.box}>
      <div className={styles.success}>
        <p className={styles.congratulations}>Felicitaciones!</p>
        <div className={styles.image}>
          <img src={require("../../img/couch.png")} alt="Logo" />
        </div>  
          <div className={styles.box_check}>
            <FontAwesomeIcon className={styles.check} icon={faCheck} />
          </div>

          <p>Ahora estas {text}</p>
       
      </div>
    </div>
  );
};

export default SuccessfulForm;
