import React from 'react'
import styles from '../../styles/forms-styles/forms.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Formik, Form, Field, ErrorMessage } from 'formik'

const Register = ({ }) => {

  const [submittedForm, changesubmittedForm] = useState(false)

  return (

    <div className={styles.wrap_form}>
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
            type="email"
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
            <p><a href="">Ya tienes una cuenta? INICIAR SESIÓN</a></p>
          </div>


        </form>

      </section>
    </div>

  )
}

export default Register
