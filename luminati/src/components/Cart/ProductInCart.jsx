
import recibidor from './../../img/recibidor.jpg'
import styles from './../../styles/productInCart.module.css'
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';

const ProductInCart = () => {
    return (
        <div className={styles.containerGrid}>
            <div className={styles.photoDiv}>
                <img src={recibidor} alt="producto" className={styles.photoProduct} />
            </div>

            <h2 className={styles.productName}>Recibidor</h2>
            <IoMdCloseCircleOutline className={styles.closeIcon} />


            <div className={styles.counter}>
                <RiSubtractFill className={styles.minus} />
                <p>01</p>
                <RiAddFill className={styles.plus} />
            </div>

            <p className={styles.productPrice}>$ 10.000</p>
        </div>
    );
}

export default ProductInCart;
