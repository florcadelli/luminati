import React from 'react'
import styles from '../../styles/forms-styles/forms.module.css';

 
const Register = ({props}) => {
return (
<section className={styles.register}>
            <form action="/register.html" method="POST">
            
                <label for="user-name">Nombre</label>
                <input className="user-name"
                  type="text"
                  placeholder=""
                  name="user-name"
                  id="user-name"
                  required
                />
                
                <label for="mail">Email</label>
                <input className="mail"
                  type="mail"
                  placeholder=""
                  name="mail"
                  id="mail"
                  required
                />

                <label for="password">Contraseña</label>
                <div>
                <input className="password"
                  type="password"
                  placeholder=""
                  name="password"
                  id="password"
                  required
                />
              {/* <i class="fas fa-eye-slash"></i> */}
                </div>
              

                <label for="repeated-password">Confirmar contraseña</label>
                <input className="repeated-password"
                  type="password"
                  placeholder=""
                  name="repeated-password"
                  id="repeated-password"
                  required
                />
                {/* <i class="fas fa-eye-slash"></i> */}
               

              <div className={styles.final}>
                <input className={styles.button} type="submit" value="REGISTRARSE" />
                <p>Ya tienes una cuenta? <a href="">INICIAR SESIÓN</a></p>
              </div>
             

            </form>
            
        </section>
)
}

export default Register
