import React, { Component } from "react";

class Hoenn extends Component {
  render() {
    let { display } = this.props;
    function Capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
      <div
        id="Hoenn"
        className="App"
        onClick={(e) => this.props.onClick(e.target.id)}
      >
        <div id="topbar">
          <h1>Click anywhere to catch a pokemon</h1>
        </div>
        <div style={{ display }} className="encounter">
          <img className="pokemon-image" src={this.props.imgsrc} />
          <p>You have encountered: {Capitalize(this.props.namesrc)}</p>
          <p> HP: {this.props.stats[0].base_stat}</p>
          <div
            style={{
              height: "10px",
              width: `${this.props.stats[0].base_stat}px`,
              backgroundColor: "blue",
            }}
          ></div>
          <p> Atk: {this.props.stats[1].base_stat}</p>
          <div
            style={{
              height: "10px",
              width: `${this.props.stats[1].base_stat}px`,
              backgroundColor: "red",
            }}
          ></div>
          <p> Def: {this.props.stats[2].base_stat}</p>
          <div
            style={{
              height: "10px",
              width: `${this.props.stats[2].base_stat}px`,
              backgroundColor: "orange",
            }}
          ></div>
          <p> SpAtk: {this.props.stats[3].base_stat}</p>
          <div
            style={{
              height: "10px",
              width: `${this.props.stats[3].base_stat}px`,
              backgroundColor: "yellow",
            }}
          ></div>
          <p> SpDef: {this.props.stats[4].base_stat}</p>
          <div
            style={{
              height: "10px",
              width: `${this.props.stats[4].base_stat}px`,
              backgroundColor: "purple",
            }}
          ></div>
          <p> Spd: {this.props.stats[5].base_stat}</p>
          <div
            style={{
              height: "10px",
              width: `${this.props.stats[5].base_stat}px`,
              backgroundColor: "green",
            }}
          ></div>
          <p>Capture rate: {this.props.capRate}</p>
        </div>
      </div>
    );
  }
}

export default Hoenn;
