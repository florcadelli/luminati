import React from 'react'
import styles from '../../styles/home.module.css';

function Card() {
    return (
        <>
            <div className={styles.containerCard}>
            <img src={require('../../img/iluminacion01.jpg')} />
            <h3>Escritorio minimalista</h3>
            <h2>$12.00</h2>
            </div>
        </>
    )
}

export default Card
