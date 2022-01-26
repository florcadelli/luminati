import React from 'react'
import HeaderForms from './HeaderForms.jsx';
import {Outlet} from 'react-router-dom';

const Form = ({props}) => {
return (
    <div>
        <header>
            <HeaderForms/>
        </header>
        <main>
           <Outlet />
        </main>    
    </div>

)
}

export default Form
