import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Kanto from "./components/Kanto";
import Johto from "./components/Johto";
import Hoenn from "./components/Hoenn";
import Sinnoh from "./components/Sinnoh";
import Unova from "./components/Unova";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {},
      display: "none",
      maxNumb: 10,
      minNumb: 1,
      capRate: 100,
    };
  }
  componentDidMount() {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 100) + 1}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pokemon: data,
        });
      });
    fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${
        Math.floor(Math.random() * 100) + 1
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          capRate: data.capture_rate,
        });
      });
  }

  onClick = (region) => {
    if (region === "Kanto") {
      this.setState({
        maxNumb: 151,
        minNumb: 1,
      });
    } else if (region === "Johto") {
      this.setState({
        maxNumb: 251,
        minNumb: 1,
      });
    } else if (region === "Hoenn") {
      this.setState({
        maxNumb: 386,
        minNumb: 251,
      });
    } else if (region === "Sinnoh") {
      this.setState({
        maxNumb: 386,
        minNumb: 493,
      });
    } else if (region === "Unova") {
      this.setState({
        maxNumb: 494,
        minNumb: 649,
      });
    } else {
      this.setState({
        maxNumb: 10,
        minNumb: 1,
      });
    }
    this.setState({
      display: "block",
    });

    fetch(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(
        Math.random() * (this.state.maxNumb - this.state.minNumb) +
          this.state.minNumb
      )}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          pokemon: data,
        });
      });

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${this.state.pokemon.id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          capRate: data.capture_rate,
        });
      });
  };

  render() {
    if (
      this.state.pokemon.sprites === undefined ||
      this.state.pokemon.name === undefined
    ) {
      return <div>Loading...</div>;
    }
    return (
      <div className="">
        {/* <img src={this.state.pokemon.sprites.front_default} /> */}
        <Header />
        <Kanto
          imgsrc={this.state.pokemon.sprites.front_default}
          namesrc={this.state.pokemon.name}
          onClick={this.onClick}
          display={this.state.display}
          stats={this.state.pokemon.stats}
          capRate={this.state.capRate}
        />
        <Johto
          imgsrc={this.state.pokemon.sprites.front_default}
          namesrc={this.state.pokemon.name}
          onClick={this.onClick}
          display={this.state.display}
          stats={this.state.pokemon.stats}
          capRate={this.state.capRate}
        />
        <Hoenn
          imgsrc={this.state.pokemon.sprites.front_default}
          namesrc={this.state.pokemon.name}
          onClick={this.onClick}
          display={this.state.display}
          stats={this.state.pokemon.stats}
          capRate={this.state.capRate}
        />
        <Sinnoh
          imgsrc={this.state.pokemon.sprites.front_default}
          namesrc={this.state.pokemon.name}
          onClick={this.onClick}
          display={this.state.display}
          stats={this.state.pokemon.stats}
          capRate={this.state.capRate}
        />
        <Unova
          imgsrc={this.state.pokemon.sprites.front_default}
          namesrc={this.state.pokemon.name}
          onClick={this.onClick}
          display={this.state.display}
          stats={this.state.pokemon.stats}
          capRate={this.state.capRate}
        />
      </div>
    );
  }
}

export default App;
