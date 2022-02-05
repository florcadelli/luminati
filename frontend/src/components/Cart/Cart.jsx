import ProductInCart from "./ProductInCart";
import styles from './../../styles/cart.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import HeaderLogo from './../home/HeaderLogo'
import HomeFooter from './../home/HomeFooter'

const Cart = () => {
    return (

        <>
            <div className={styles.versionDesk}> <HeaderLogo /> </div>

            <div className={styles.container}>
                <div className={styles.cartHeader}>
                    <div className={styles.divBackIcon}>
                        <Link to="/luminati"><FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} /></Link>

                    </div>
                    <p>Mi Carrito</p>
                    <p></p>
                </div>

                <div className={styles.containerDesk}>

                    <main className={styles.mainCart}>

                        <ProductInCart />
                        <ProductInCart />
                        <ProductInCart />
                        <ProductInCart />
                        <ProductInCart />
                                                
                    </main>

                    <footer className={styles.footerCart}>
                        <div className={styles.line}></div>

                        <div className={styles.totalPrice}>
                            <p>Total</p>
                            <p>$ 30.000</p>
                        </div>
                        <Link to="/checkOut" > 
                        <button className={styles.continueButton}>Continuar</button>
                        </Link>
                        

                    </footer>

                </div>




            </div>

            <div className={styles.versionDesk}> <HomeFooter /> </div>
        </>

    );
}

export default Cart;