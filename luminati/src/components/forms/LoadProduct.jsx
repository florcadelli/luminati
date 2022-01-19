import React from 'react'
import styles from '../../styles/forms-styles/forms.module.css';

 
const LoadProduct = ({props}) => {
return (
  <div>
       <p className={styles.greeting}>Cargar Producto</p>
<section className={styles.register}>


            <form action="/register.html" method="POST">
            
                <label htmlFor="product-name">Nombre producto</label>
                <input className="user-name"
                  type="text"
                  placeholder=""
                  name="product-name"
                  id="product-name"
                  required
                />
                
                <label htmlFor="price">Precio</label>
                <input className="price"
                  type="text"
                  placeholder=""
                  name="price"
                  id="price"
                  required
                />
                <label htmlFor="description">Descripción</label>
                  <textarea className={styles.description}
                  name="description"
                  id="description"
                  placeholder=""
                ></textarea>
                
                <div className={styles.photo}>
                <label htmlFor="picture" className={styles.file}>SELECCIONAR IMAGEN</label>
                <label htmlFor="" className={styles.field}></label>  
                <input className={styles.picture}
                  type="file"
                  placeholder=""
                  name="picture"
                  id="picture"
                  required
                />
               
              {/* <i class="fas fa-eye-slash"></i> */}
                </div>
              

                {/* <i class="fas fa-eye-slash"></i> */}
               

              <div className={styles.final}>
                <input className={styles.button} type="submit" value="CONFIRMAR PRODUCTO" />
                <p> <a href="">EDITAR PRODUCTO</a></p>
              </div>
             

            </form>
            
        </section>
  </div>
 
)
}

export default LoadProduct

// trabajar con el estado para cargar el nombre de la imagen dentro del label vacio.
// cuando el input cambie...atrapar el texto interno, pasarlo al estado 
// desde el label vacio...cargar el valor del estado dentro del text

