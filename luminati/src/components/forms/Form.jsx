import React from 'react'
import HeaderForms from './HeaderForms.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';
import LoadProduct from './LoadProduct.jsx';

const Form = ({props}) => {
return (
    <div>
        <header>
            <HeaderForms/>
        </header>
        <main>
            {/* <Register/> */}
            {/* <Login/> */}
            <LoadProduct/>
        </main>    
    </div>

)
}

export default Form
