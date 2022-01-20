import React from 'react'
import styles from '../../styles/forms-styles/forms.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
 
const Register = ({props}) => {
return (
<section className={styles.register}>
            <form action="/register.html" method="POST">
            
                <label htmlFor="user-name">Nombre</label>
                <input className="user-name"
                  type="text"
                  placeholder=""
                  name="user-name"
                  id="user-name"
                  required
                />
                
                <label htmlFor="mail">Email</label>
                <input className="mail"
                  type="mail"
                  placeholder=""
                  name="mail"
                  id="mail"
                  required
                />

                <label htmlFor="password">Contraseña</label>
                <div className={styles.wrap}>
                <input className={styles.password}
                  type="password"
                  placeholder=""
                  name="password"
                  id="password"
                  required
                />
                <FontAwesomeIcon icon={faEye} />
                {/* <FontAwesomeIcon icon={faEyeSlash} /> */}
                </div>
              

                <label htmlFor="repeated-password">Confirmar contraseña</label>
                <div className={styles.wrap}>
                <input className={styles.password}
                  type="password"
                  placeholder=""
                  name="repeated-password"
                  id="repeated-password"
                  required
                />
                <FontAwesomeIcon icon={faEye} />
                {/* <FontAwesomeIcon icon={faEyeSlash} /> */}
                </div>
                
               
               

              <div className={styles.final}>
                <input className={styles.button} type="submit" value="REGISTRARSE" />
                <p>Ya tienes una cuenta? <a href="">INICIAR SESIÓN</a></p>
              </div>
             

            </form>
            
        </section>
)
}

export default Register
