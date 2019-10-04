import React from 'react';
import './App.css';
import axios from "axios"

// components
import { PlayerCard } from "./components/PlayerCard"



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
      console.log("ERROR: ", error)
    })
  }

  componentDidUpdate() {
    console.log("component updated")
  }

  render() {
    return (
      <div className="App">
        <h1>hello</h1>
        <section className="players">
          <PlayerCard />
        </section>
      </div>
    )
  }
}

export default App;
