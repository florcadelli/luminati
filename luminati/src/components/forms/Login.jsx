import React from 'react'
import styles from'../../styles/forms-styles/forms.module.css';

const Login = ({props}) => {
return (
<div>
<p className={styles.greeting}>Hola !</p>

  
<section className={styles.register}>
    <form action="/login.html" method="POST">
    

        <label for="mail">Email</label>
        <input className="mail"
          type="mail"
          placeholder=""
          name="mail"
          id="mail"
          required
        />

        <label for="password">Contraseña</label>
        <input className="password"
          type="password"
          placeholder=""
          name="password"
          id="password"
          required
        />


        
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
