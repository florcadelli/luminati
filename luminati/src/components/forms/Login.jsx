import React from 'react'
import styles from'../../styles/forms-styles/forms.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const Login = ({props}) => {
return (
<div>
<p className={styles.greeting}>Hola !</p>

  
<section className={styles.register}>
    <form action="/login.html" method="POST">
    

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
  

        
        <div className={styles.final}>

            <p><a className="forgot-password" href="">Olvido su contraseña?</a></p>
            <input className={styles.button} type="submit" value="INICIAR SESIÓN" />
            <p><a href="">REGISTRARSE</a></p>
        </div>
     

    </form>
    
</section>
</div>
)
}

export default Login
