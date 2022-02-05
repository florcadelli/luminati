import styles from './../../styles/checkout.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeaderLogo from './../home/HeaderLogo'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CheckOut() {
  return <div>
      <div className={styles.versionDesk}> <HeaderLogo /> </div>
      <div className={styles.container}> 
      <div className={styles.divBackIcon}>
                        <Link to="/carrito"><FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} /></Link>

                    </div>
                    <p>CHECK-OUT</p>
      </div>
      
  </div>;
}

export default CheckOut;
