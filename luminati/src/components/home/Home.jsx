import React from 'react'
import HeaderLogo from './HeaderLogo';
import NavCategory from './NavCategory'
import CardList from './CardList';


function Home() {
    return (
        <div>
             <HeaderLogo />
             <NavCategory />
             <CardList />
        </div>
    )
}

export default Home
