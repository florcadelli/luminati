import React from 'react'
import styles from '../../styles/forms-styles/header-forms.module.css';


const HeaderForms = ({props}) => {
return ( 
       <div className={styles.header}>
           <div className={styles.line}></div>
           <img src={process.env.PUBLIC_URL + '../../images/logo-luminati.png' }  alt="Logo" />
         <div className={styles.line}></div>
       </div>     
)
}

export default HeaderForms