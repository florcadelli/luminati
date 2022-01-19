import React from 'react'
import styles from '../../styles/home.module.css';
import { GiMirrorMirror } from 'react-icons/gi';
import { GiTable } from 'react-icons/gi';
import { GiSofa } from 'react-icons/gi';
import { GiFlexibleLamp } from 'react-icons/gi';
import { BiBed } from 'react-icons/bi';


function NavCategory() {
    return (
        <div className={styles.navScroll} >
            <div className={styles.item}>
                <BiBed/> 
                <h2 className={styles.itemTitle}>Dormitorio</h2> 
            </div>
            <div className={styles.item}><GiMirrorMirror/><h2 className={styles.itemTitle}>Espejos</h2></div>
            <div className={styles.item}><GiTable/><h2 className={styles.itemTitle}>Mesas</h2></div>
            <div className={styles.item}><GiSofa/><h2 className={styles.itemTitle}>Asientos</h2></div>
            <div className={styles.item}><GiFlexibleLamp/><h2 className={styles.itemTitle}>Iluminación</h2></div>
        </div>
    )
}

export default NavCategory
