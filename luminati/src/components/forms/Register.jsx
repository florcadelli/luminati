import React, { useState } from 'react'
import styles from'../../styles/forms-styles/forms.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik'



const Register = ({}) => {

  const[submittedForm, changesubmittedForm] = useState(false)

return (
<div className={styles.wrap_form}>
 
<section className={styles.register}>

    <Formik
      initialValues={{
          name:'',
          email: '',
          password: '',
          repeated_password:''

      }}
      validate={(values) =>{
          let errors = {};

          //validacion de nombre
          if(!values.name){
            errors.name = 'Por favor ingresa un nombre'
        }else if(! /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)){
          errors.name = 'El nombre es incorrecto'
        }

          //validacion email
          if(!values.email){
              errors.email = 'Por favor ingresa un email'
          }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)){
            errors.email = 'El email es incorrecto'
          }

              <div className={styles.final}>
                <input className={styles.button} type="submit" value="REGISTRARSE" />
                <p><Link to="/formulario/login">Ya tienes una cuenta? INICIAR SESIÓN</Link></p>
              </div>
             
           //validacion contraseña
           if(!values.password){
            errors.password = 'Por favor ingresa una contraseña'
        }else if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(values.password)){
          errors.password= 'La contraseña es incorrecto'
        }
           //validacion de contraseña repetida
          //  toma lo ingresado en el campo de contraseña y compara lo ingresado en el campo nuevo
          if(!values.password){
            errors.repeated_password= 'Por favor repite la contraseña'
        }else if(values.password !== values.repeated_password){
          errors.repeated_password= 'La contraseña es incorrecto'
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
        {( { errors}) => (
        <Form>
           {console.log(errors)}

           <label htmlFor="name">Nombre</label>
        <Field className="name"
          type="text"
          placeholder=""
          name="name"
          id="name"
        />  
        <ErrorMessage name='name' component={() => (
            <div className={styles.error}> {errors.name}</div>
        )} />
          
       <label htmlFor="email">Email</label>
        <Field className="mail"
          type="email"
          placeholder=""
          name="email"
          id="email"
        />  
        <ErrorMessage name='email' component={() => (
            <div className={styles.error}> {errors.email}</div>
        )} />
          
         
        <label htmlFor="password">Contraseña</label>
         <div className={styles.wrap}>
         
         <Field className={styles.password}
          type="password"
          placeholder=""
          name="password"
          id="password"
    
          />
         <FontAwesomeIcon icon={faEye} />
         {/* <FontAwesomeIcon icon={faEyeSlash} /> */}
         </div>
         <ErrorMessage name='password' component={() => (
            <div className={styles.error}> {errors.password}</div>
        )} />
         
         <label htmlFor="repeated_password">Confirmar Contraseña</label>
         <div className={styles.wrap}>
         
         <Field className={styles.password}
          type="password"
          placeholder=""
          name="repeated_password"
          id="repeated_password"
    
          />
         <FontAwesomeIcon icon={faEye} />
         {/* <FontAwesomeIcon icon={faEyeSlash} /> */}
         </div>
         <ErrorMessage name='repeated_password' component={() => (
            <div className={styles.error}> {errors.repeated_password} </div>
        )} />
    
    
        
        <div className={styles.final}>
    
            <p><a className="forgot-password" href="">Olvido su contraseña?</a></p>
            <input className={styles.button} type="submit" value="REGISTRARSE" />
            <p><a href="">Ya tienes una cuenta? INICIAR SESIÓN</a></p>
            {submittedForm && <p className={styles.success}>Formulario enviado</p>}
        </div>
     
    
    </Form>
        )}
    
    </Formik>
   
    
</section>
</div>
)
}

export default Register

// Minimo 8 caracteres
// Maximo 15
// Al menos una letra mayúscula
// Al menos una letra minucula
// Al menos un dígito
// No espacios en blanco

