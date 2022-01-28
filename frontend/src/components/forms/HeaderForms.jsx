import React from "react";
import HeaderLogo from '../home/HeaderLogo.jsx';
import styles from "../../styles/forms-styles/header-forms.module.css";
import { Link } from "react-router-dom";


const HeaderForms = ({ props }) => {
  return (
    <div>
        <div className={styles.header}>
      <div className={styles.line}></div>
      <Link className={styles.logo}  to="/">
        <img src={require("../../img/logo-luminati.png")} alt="Logo" />
      </Link>
      <div className={styles.line}></div>
     </div>
     <div className={styles.desktop}>
        <HeaderLogo/>
     </div>
     
    </div>
    
  );
};



export default HeaderForms
