import React from "react";
import styles from "../../styles/forms-styles/header-forms.module.css";
import { Link } from "react-router-dom";

const HeaderForms = ({ props }) => {
  return (
    <div className={styles.header}>
      <div className={styles.line}></div>
      <Link className={styles.logo}  to="/">
        <img src={require("../../img/logo-luminati.png")} alt="Logo" />
      </Link>
      <div className={styles.line}></div>
    </div>
  );
};



export default HeaderForms
