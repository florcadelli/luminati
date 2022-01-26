import React from 'react'
import styles from '../../styles/forms-styles/header-forms.module.css';
import {Link} from 'react-router-dom';


const HeaderForms = ({props}) => {
return ( 
       <div className={styles.header}>
           <div className={styles.line}></div>
           <Link to="/"><img src={require('../../img/logo-luminati.png' )} alt="Logo" /></Link>
           
           {/* <img src={process.env.PUBLIC_URL + "./img/logo-luminati.png" }  alt="Logo" /> */}
         <div className={styles.line}></div>
       </div>     
)
}

export default HeaderForms
