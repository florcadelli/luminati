import React from 'react'
import Card from './Card'
import styles from '../../styles/home.module.css';

function CardList() {
    return (
        <div className={styles.cardList}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardList
