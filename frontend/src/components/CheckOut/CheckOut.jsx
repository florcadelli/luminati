import React from "react";
import styles from "./../../styles/checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderLogo from "./../home/HeaderLogo";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Formik } from "formik";

const CheckOut = ({ props }) => {
  return (
    <>
      <div className={styles.versionDesk}>
        {" "}
        <HeaderLogo />{" "}
      </div>
      <div className={styles.containerCheckHeader}>
        <div className={styles.divBackIcon}>
          <Link to="/carrito">
            <FontAwesomeIcon icon={faChevronLeft} className={styles.backIcon} />
          </Link>
        </div>
        <p>CHECK-OUT</p>
      </div>

      <Formik
        initialValues={{
          nameDestination: "Mengano Perez",
          nameDirection: "Pellegrini 622, La Rioja",
        }}

        
        onSubmit={(valores) => {
          console.log("Formeualario enviado");
        }}
      >
        {({ values, handleSubmit, handleChange, handleBlur }) => (

          <form className={styles.checkOutForm} onSubmit={handleSubmit}>
            {console.log(props)}
            <div className={styles.checkFormName}>
              <label htmlFor="nameDestination"> Nombre de destinatario </label>
              <input
                type="text"
                id="nameDestination"
                name="nameDestination"
                placeholder="Fulano de tal"
                value={values.nameDestination}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <div className={styles.checkFormDirection}>
              <label htmlFor="nameDirection"> Dirección de envío </label>
              <input
                type="text"
                id="nameDirection"
                name="nameDirection"
                placeholder="25 rue Robert Latouche, Nice, 06200, Côte D’azur, France"
                value={values.nameDirection}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>

            <button type="submit">Enviar Orden</button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default CheckOut;
