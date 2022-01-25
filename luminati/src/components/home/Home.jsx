import React from 'react'
import HeaderLogo from './HeaderLogo';
import NavCategory from './NavCategory'
import CardList from './CardList';
import BottomIconNav from './BottomIconNav';
import HeaderWsp from './HeaderWsp';
import HomeFooter from './HomeFooter';


function Home() {
    return (
        <div className="home__container">
             <HeaderLogo />
             <NavCategory />
             <CardList />
             <BottomIconNav />
             <HeaderWsp />
             <HomeFooter />
        </div>
    )
}

export default Home
