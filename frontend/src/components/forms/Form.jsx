import React from 'react'
import HeaderForms from './HeaderForms.jsx';
import HomeFooter from '../home/HomeFooter.jsx';
import HeaderLogo from '../home/HeaderLogo.jsx';
// import styles from "../../styles/forms-styles/gral_forms.module.css";
import styles from "../../styles/forms-styles/header-forms.module.css";
import {Outlet} from 'react-router-dom';

const Form = ({props}) => {
return (
    <div>
        <header>
            <HeaderForms  className={styles.header_mobile}/>
            {/* <HeaderLogo   className={styles.desktop}/> */}
        </header>
        <main>
           <Outlet />
        </main> 
        {/* <footer>
            <HomeFooter/>
        </footer>    */}
    </div>

)
}

export default Form
