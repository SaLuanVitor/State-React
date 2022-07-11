
import React, { Component } from "react";
import './App.css';
import Abacate from "./Assets/Abacate.jpg"



class App extends Component {
  state = {
    nome: "Luan",
    idade: 22,
    comidaFavorita: "Torta de Frango",
    musicas: ["É osso", "Love Love", "Pontos de exclamação"]
  }
  render() {
    return (
      <>
        <h1>Me chamo: {this.state.nome}</h1>
        <h2>Tenho {this.state.idade} anos</h2>
        <h3>Gosto de comer {this.state.comidaFavorita}</h3>
        <h3>Músicas:</h3>
        <ul>
          <li>{this.state.musicas[0]}</li>
          <li>{this.state.musicas[1]}</li>
          <li>{this.state.musicas[2]}</li>
        </ul>
        <h3>Uma das minhas frutas prediletas:</h3>
        <img src={Abacate}></img>
      </>
    );
  }
}

export default App;
