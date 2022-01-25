import React, {useState} from 'react'
import styles from'../../styles/forms-styles/forms.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';

const Login = ({props}) => {

    const[inputMail, changeInputMail] = useState('');
    const[inputPassword, changeInputPasword] = useState('');

    const handleSubmit =(e)=> {
        e.preventDefault();
        console.log(inputMail)
        console.log("Formulario enviado!")
    }

    const handleInputMail =(e) => {
        changeInputMail(e.target.value)
    }

    const handleInputPassword =(e) => {
        changeInputPasword(e.target.value)
    }

return (
<div>
<p className={styles.greeting}>Hola !</p>

  
<section className={styles.register}>
    <form action="/login.html" onSubmit={handleSubmit} method="POST">
    

        <label htmlFor="mail">Email</label>
        <input className="mail"
          type="mail"
          placeholder=""
          name="mail"
          id="mail"
          value={inputMail}
          onChange={handleInputMail}
        //   required
        />
        <label htmlFor="password">Contraseña</label>
         <div className={styles.wrap}>
         
         <input className={styles.password}
          type="password"
          placeholder=""
          name="password"
          id="password"
          value={inputPassword}
          onChange={handleInputPassword}
        //   required
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
