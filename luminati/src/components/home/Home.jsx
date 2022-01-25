import React from 'react'
import HeaderLogo from './HeaderLogo';
import NavCategory from './NavCategory'
import CardList from './CardList';
import BottomIconNav from './BottomIconNav';
import HeaderWsp from './HeaderWsp';


function Home() {
    return (
        <div className="home__container">
             <HeaderLogo />
             <NavCategory />
             <CardList />
             <BottomIconNav />
             <HeaderWsp />
        </div>
    )
}

export default Home
