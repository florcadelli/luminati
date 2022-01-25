import React, { useState } from 'react'
import styles from'../../styles/forms-styles/forms.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {Formik} from 'formik'

const Login = ({}) => {

  const[submittedForm, changesubmittedForm] = useState(false)

return (
<div>
<p className={styles.greeting}>Hola !</p>

  
<section className={styles.register}>

    <Formik
      initialValues={{
          email: '',
          password: ''
      }}
      validate={(values) =>{
          let errors = {};

          //validacion email
          if(!values.email){
              errors.email = 'Por favor ingresa un email'
          }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errors.email = 'El email es incorrecto'
          }

           //validacion contraseña
           if(!values.password){
            errors.password = 'Por favor ingresa una contraseña'
        }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(values.password)){
          errors.password= 'La contraseña es incorrecto'
        }

          return errors;
      }}
      onSubmit={ (values, {resetForm}) => {
          resetForm();
          console.log('formulario enviado!')
          changesubmittedForm(true)
          setTimeout (() => changesubmittedForm(false),3000);
      }}
    >
        {( {values, errors, touched, handleSubmit,handleChange,handleBlur}) => (
        <form   onSubmit={handleSubmit}>
           {console.log(errors)}
          
       <label htmlFor="email">Email</label>
        <input className="mail"
          type="email"
          placeholder=""
          name="email"
          id="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />   
           {touched.email && errors.email && <div className={styles.error}> {errors.email}</div>}
         
        <label htmlFor="password">Contraseña</label>
         <div className={styles.wrap}>
         
         <input className={styles.password}
          type="password"
          placeholder=""
          name="password"
          id="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        
    
          />
         <FontAwesomeIcon icon={faEye} />
         {/* <FontAwesomeIcon icon={faEyeSlash} /> */}
         </div>
         {touched.password && errors.password && <div className={styles.error}> {errors.password}</div>}
    
    
        
        <div className={styles.final}>
    
            <p><a className="forgot-password" href="">Olvido su contraseña?</a></p>
            <input className={styles.button} type="submit" value="INICIAR SESIÓN" />
            <p><a href="">REGISTRARSE</a></p>
            {submittedForm && <p>Formulario enviado con exito!</p>}
        </div>
     
    
    </form>
        )}
    
    </Formik>
   
    
</section>
</div>
)
}

export default Login

// Minimo 8 caracteres
// Maximo 15
// Al menos una letra mayúscula
// Al menos una letra minucula
// Al menos un dígito
// No espacios en blanco
// Al menos 1 caracter especial
