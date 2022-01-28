import React from "react";
import HeaderLogo from "./HeaderLogo";
import NavCategory from "./NavCategory";
import CardList from "./CardList";
import BottomIconNav from "./BottomIconNav";
import HeaderWsp from "./HeaderWsp";
import HomeFooter from "./HomeFooter";

function Home() {
  return (
    <div className="home__container">
      <header>
        <HeaderLogo />
        <HeaderWsp />
        <NavCategory />
      </header>
      <main>
        <CardList />
        <BottomIconNav />
      </main>
      <footer>
        <HomeFooter />
      </footer>
    </div>
  );
}

export default Home;
