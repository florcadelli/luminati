import recibidor from './../../img/recibidor.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faObjectGroup } from '@fortawesome/free-solid-svg-icons';
import styles from './../../styles/productDetail.module.css'
import { RiAddFill, RiSubtractFill } from 'react-icons/ri';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.photoDiv}>
                <img src={recibidor} alt="Mueble recibidor" className={styles.photoRecibidor} />
            </div>

            <div className={styles.divBackIcon}>
                <Link to="/"><FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} /></Link>
            </div>
            <h1 className={styles.productName}>Mueble Recibidor</h1>
            <div className={styles.productDetail}>
                <p>$ 10.000</p>
                <div className={styles.productNumber}>
                    <RiSubtractFill className={styles.minus} />
                    <p>01</p>
                    <RiAddFill className={styles.plus} />
                </div>
            </div>
            <p className={styles.productDescription}> Recibidor simple, presenta 3 estantes con base de hierro, 2 estantes de madera.
                El color del hierro es a elección del cliente, se venden solos o en combo con
                los espejos circulares.
                Ideales para espacios pequeños o la entrada del hogar
            </p>
            <div className={styles.buy}>
                <Link to="/carrito"><BsCart2 className={styles.cartIcon} /></Link>
                <button className={styles.addCart}>Agregar al carrito</button>
            </div>
        </div>

    );
}

export default ProductDetail;