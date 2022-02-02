import React from "react";
import Card from "./Card";
import styles from "../../styles/home.module.css";
import dataCards from "../../listadoElementos.json";

function CardList() {
  return (
    <div className={styles.cardList}>
      {dataCards.map((dataCard) => (
        <Card infoCard={dataCard} key={dataCard.id} />
      ))}
      {/* el map en el array(json dataCards) transforma cada elemento en 
                un componente de react con distintas props 
                dataCard = info particular de cada elemento */}
    </div>
  );
}

export default CardList;
