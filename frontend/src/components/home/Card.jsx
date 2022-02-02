import React from "react";
import styles from "../../styles/home.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className={styles.containerCard}>
        <Link to="/detalleProducto">
          
          <img src={props.infoCard.img} />
          <div className={styles.img__Carrito}>
            <FiShoppingCart />
          </div>
          <h3>{props.infoCard.title}</h3>
          <div>
            <p>{props.infoCard.price} </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Card;
