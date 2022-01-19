import React from 'react'
import styles from '../../styles/home.module.css';

function HeaderLogo() {
    return (
    <div className={styles.headerLogo} >
        <img src={require('../../img/logo-luminati.png')} />
        </div>
    )
}

export default HeaderLogo
