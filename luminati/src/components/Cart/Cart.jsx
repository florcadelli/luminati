import ProductInCart from "./ProductInCart";
import styles from './../../styles/cart.module.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cartHeader}>
                <div className={styles.divBackIcon}>
                    <FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} />
                </div>
                <p>Mi Carrito</p>
                <p></p>
            </div>


            <ProductInCart />
            <ProductInCart />
            <ProductInCart />
        </div>

    );
}

export default Cart;