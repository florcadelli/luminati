import React from 'react'
import HeaderForms from './HeaderForms.jsx';
import Register from './Register.jsx';
import Login from './Login.jsx';

const Form = ({props}) => {
return (
    <div>
        <header>
            <HeaderForms/>
        </header>
        <main>
            {/* <Register/> */}
            <Login/>
        </main>    
    </div>

)
}

export default Form
