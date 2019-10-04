import React from 'react';
import './App.css';
import axios from "axios"

// components
import { PlayerCard } from "./components/PlayerCard"
import Header from "./components/Header"





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
        <Header />
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
