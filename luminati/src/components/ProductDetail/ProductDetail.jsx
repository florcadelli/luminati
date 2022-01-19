import recibidor from './../../img/recibidor.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faPlusSquare, faShoppingCart, faMinusSquare} from '@fortawesome/free-solid-svg-icons';
import styles from './../../styles/productDetail.module.css'

const ProductDetail = () => {
    return (  
        <div className= {styles.container}>
            <div className={styles.photoDiv}>
                <img src={recibidor} alt="Mueble recibidor" className={styles.photoRecibidor} />
            </div>
            
            <div className={styles.divBackIcon}>
            <FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon}/>
            </div>
            <p className={styles.productName}>Recibidor</p>
            <div className={styles.productDetail}>
                <p>$ 10.000</p>
                <div className={styles.productNumber}>
                <FontAwesomeIcon icon={faMinusSquare} className={styles.minus}/>
                <p>01</p>
                <FontAwesomeIcon icon={faPlusSquare} className={styles.plus}/>
                </div>                
            </div>
            <p className={styles.productDescription}> Recibidor simple, presenta 3 estantes con base de hierro, 2 estantes de madera. 
                El color del hierro es a elección del cliente, se venden solos o en combo con 
                los espejos circulares. 
                Ideales para espacios pequeños o la entrada del hogar 
            </p>
            <div className={styles.buy}>
                <FontAwesomeIcon icon={faShoppingCart} className={styles.cartIcon}/>
                <button className={styles.addCart}>Agregar al carrito</button>
            </div>
        </div>
        
    );
}
 
export default ProductDetail;