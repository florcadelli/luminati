import React, { useState } from "react";
import styles from "./../../styles/checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderLogo from "./../home/HeaderLogo";
import HomeFooter from "./../home/HomeFooter";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const CheckOut = ({ props }) => {
  const [sendedForm, changeSendedForm] = useState(false);
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
          nameDestination: "",
          nameDirection: "",
        }}
        validate={(valores) => {
          let errores = {};

          // validación nameDestination
          if (!valores.nameDestination) {
            errores.nameDestination = "Por favor ingresa un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nameDestination)) {
            errores.nameDestination = (
              <p className={styles.problem}>
                {" "}
                "El nombre solo puede contener letras y espacios"{" "}
              </p>
            );
          }

          // validación nameDirection
          if (!valores.nameDirection) {
            errores.nameDirection = (
              <p className={styles.problem}>
                "Por favor ingresa una dirección de envío"
              </p>
            );
          } else if (
            !/^[a-zA-Z0-9_.+-]+[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.nameDirection
            )
          ) {
            errores.nameDirection = (
              <p className={styles.problem}>
                "La direccion solo puede contener letras, numeros y espacios"
              </p>
            );
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("Formeualario enviado"); //aca es donde se hace la llamada a la API para enviar los valores
          changeSendedForm(true);
          setTimeout(() => changeSendedForm(false), 5000);
        }}
      >
        {({ errors }) => (
          <Form className={styles.checkOutForm}>
            {console.log(errors)}
            <div className={styles.checkFormName}>
              <h3 htmlFor="nameDestination"> Nombre de destinatario </h3>
              <Field
                type="text"
                id="nameDestination"
                name="nameDestination"
                placeholder="Fulano de tal"
              />
              <ErrorMessage
                name="nameDestination"
                component={() => {
                  <div className="error">{errors.nameDestination}</div>;
                }}
              />
            </div>

            <div className={styles.checkFormDirection}>
              <h3 htmlFor="nameDirection"> Dirección de envío </h3>
              <Field
                type="text"
                id="nameDirection"
                name="nameDirection"
                placeholder="25 rue Robert Latouche, Nice, 06200, Côte D’azur, France"
              />
              <ErrorMessage
                name="nameDirection"
                component={() => {
                  <div className="error">{errors.nameDirection}</div>;
                }}
              />
            </div>

            <div className={styles.checkFormDirection}>
              <h3 htmlFor="paymentMethod"> Pago </h3>
              <label>
                <Field
                  id="paymentMethod"
                  type="radio"
                  name="paymentMethod"
                  value="transferencia"
                />{" "}
                Transferencia Bancaria
              </label>
              <label>
                <Field
                  id="paymentMethod"
                  type="radio"
                  name="paymentMethod"
                  value="mercadoPago"
                />{" "}
                Mercado Pago
              </label>
            </div>

            <div className={styles.checkFormDirection}>
              <h3 htmlFor="sendMethod"> Entrega </h3>
              <label>
                <Field
                  id="sendMethod"
                  type="radio"
                  name="sendMethod"
                  value="transferencia"
                />{" "}
                Retiro en local
              </label>
              <label>
                <Field
                  id="sendMethodd"
                  type="radio"
                  name="sendMethod"
                  value="mercadoPago"
                />{" "}
                Envío por transporte
              </label>
            </div>

            <div className={styles.checkFormDirection}>
              <h3> Tiempo de entrega estimado: </h3>
              <label>Entre 9 y 15 días habiles</label>
            </div>

            <div className={styles.checkFormDirection}>
              <div className={styles.checkFooter}>
                <h3> Resumen </h3>
                <p> Orden: $95.00</p>
                <p> Envío: $5.00</p>
                <p>Total: $100.00</p>

                <button type="submit">ENVIAR ORDEN</button>
                {sendedForm && (
                  <p className={styles.exito}>¡Formulario enviado con éxito!</p>
                )}
              </div>
            </div>
          </Form>
        )}

        {/* {({ values, errors, touched,handleSubmit, handleChange, handleBlur }) => (

<form className={styles.checkOutForm} onSubmit={handleSubmit}>
  {console.log(errors)}
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
    {touched.nameDestination && errors.nameDestination && <div className="error">{errors.nameDestination}</div>} 
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
    {touched.nameDirection && errors.nameDirection && <div className="error">{errors.nameDirection}</div>} 
  </div>

  <button type="submit">Enviar Orden</button>
  {sendedForm && <p className="exito">¡Formulario enviado con éxito!</p>}
</form>
)} */}
      </Formik>
      <HomeFooter/>
    </>
  );
};

export default CheckOut;
