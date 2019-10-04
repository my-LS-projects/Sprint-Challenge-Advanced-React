import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header"
import PlayerCard from "./components/PlayerCard"


test('component renders without crashing,', () => {
  ReactDOM.render(<Header />)
})

test('playercard renders without crashing', () => {
  ReactDOM.render(<PlayerCard />)
})