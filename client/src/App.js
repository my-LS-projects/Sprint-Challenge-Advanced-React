import React from 'react';
import './App.css';
import axios from "axios"

// components
import { PlayerCard } from "./components/PlayerCard"



const logo = 'https://cdn-images-1.medium.com/fit/c/120/120/1*iTABE417EkZDwRv9Uj91Qg.png'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount () {
    console.log("component mounted")
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log("RES: ", response)
      this.setState({players: response.data})
      console.log("PLAYERS STATE: ", this.state.players)
    })
    .catch(error => {
      console.log("u suck: ", error)
    })
  }

  componentDidUpdate() {
    console.log("component updated")
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="logo-wrapper"><img className="logo" src={logo}></img></div>
          <h1 className="title">Women's World Cup</h1>
          </header>
        <section className="players">
          {this.state.players.map( player => 
            <PlayerCard playerName={player.name} country={player.country} searches={player.searches}/>
          )}
        </section>
      </div>
    )
  }
}

export default App;
