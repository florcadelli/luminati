import React, { useState } from "react";
import styles from "../../styles/forms-styles/forms.module.css";

const EditProduct = ({ props }) => {
  const [inputFile, changeInputFile] = useState("");

  const handleInputFile = (e) => {
    changeInputFile(e.target.value);
  };

  return (
    <div className={styles.wrap_form}>
      <p className={styles.greeting}>Editar Producto</p>
      <section className={styles.register}>
        <form action="/register.html" method="POST">
          <label htmlFor="product-name">Nombre producto</label>
          <input
            className="user-name"
            type="text"
            placeholder="info del producto"
            name="product-name"
            id="product-name"
            required
          />

          <label htmlFor="price">Precio</label>
          <input
            className="price"
            type="text"
            placeholder="info del producto"
            name="price"
            id="price"
            required
          />
          <label htmlFor="description">Descripción</label>
          <textarea
            className={styles.description}
            name="description"
            id="description"
            placeholder="info del producto"
          ></textarea>

          <div className={styles.photo}>
            <label htmlFor="picture" className={styles.file}>
              SELECCIONAR IMAGEN
            </label>
            <label htmlFor="" className={styles.field}>
              {inputFile}
            </label>
            <input
              className={styles.picture}
              type="file"
              placeholder="info del producto"
              name="picture"
              id="picture"
              value={inputFile}
              onChange={handleInputFile}
            />
          </div>

          <div className={styles.final}>
            <input
              className={styles.button}
              type="submit"
              value="EDITAR"
            />
            {/* <p> <a href="">EDITAR PRODUCTO</a></p> */}
          </div>
        </form>
      </section>
    </div>
  );
};

export default EditProduct;

// trabajar con el estado para cargar el nombre de la imagen dentro del label vacio.
// cuando el input cambie...atrapar el texto interno, pasarlo al estado
// desde el label vacio...cargar el valor del estado dentro del text
