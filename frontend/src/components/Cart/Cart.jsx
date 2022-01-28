import ProductInCart from "./ProductInCart";
import styles from './../../styles/cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cartHeader}>
                <div className={styles.divBackIcon}>
                    <Link to="/luminati"><FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} /></Link>
                    
                </div>
                <p>Mi Carrito</p>
                <p></p>
            </div>
            
            <main className={styles.mainCart}>
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
            </main> 
            
            

            <footer className={styles.footerCart}>
                <div className={styles.line}></div>

                <div className={styles.totalPrice}>
                    <p>Total:</p>
                    <p>$ 30.000</p>
                </div>

                <button className={styles.continueButton}>Continuar</button>

            </footer>

        </div>


    );
}

export default Cart;