import React from 'react'
import HeaderLogo from './HeaderLogo';
import NavCategory from './NavCategory'
import CardList from './CardList';
import BottomIconNav from './BottomIconNav'


function Home() {
    return (
        <div>
             <HeaderLogo />
             <NavCategory />
             <CardList />
             <BottomIconNav />
        </div>
    )
}

export default Home
