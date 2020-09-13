import React from "react";
import Title from "./img/HEADERTITLE.jpeg";

function Header() {
  return (
    <div id="header" className="App">
      <img src={Title} />
      <div id="directory">
        <a href="#Kanto">Kanto</a>
        <a href="#Johto">Johto</a>
        <a href="#Hoenn">Hoenn</a>
        <a href="#Sinnoh">Sinnoh</a>
        <a href="#Unova">Unova</a>
      </div>
    </div>
  );
}

export default Header;
