import React from "react";
import HeaderLogo from "../home/HeaderLogo.jsx";
import styles from "../../styles/forms-styles/header-forms.module.css";
import { Link } from "react-router-dom";

const HeaderForms = ({ props }) => {
  return (
    <div>

      <div className={styles.header_form}>
        <div className={styles.line}></div>
        <Link className={styles.logo} to="/luminati">
          <img src={require("../../img/logo-luminati.png")} alt="Logo" />
        </Link>
        <div className={styles.line}></div>
      </div>

      <div className={styles.desktop_form}>
        <HeaderLogo />
      </div>

    </div>
  );
};

export default HeaderForms;
