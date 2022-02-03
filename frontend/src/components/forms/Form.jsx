import React from 'react'
import HeaderForms from './HeaderForms.jsx';
import HomeFooter from '../home/HomeFooter.jsx';
import { Outlet } from 'react-router-dom';

const Form = ({ props }) => {
    return (
        <div>
            <header>
                <HeaderForms />
            </header>
            <main>
                <Outlet />
            </main>
            <HomeFooter />
        </div>

    )
}

export default Form
