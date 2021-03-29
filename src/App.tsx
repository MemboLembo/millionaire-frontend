import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Game from 'views/Game'
import Home from 'views/Home'
import Retry from 'views/Retry'
import AppWithStyle from './App.style'

function App() {
  return (
    <AppWithStyle className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/retry">
          <Retry />
        </Route>
        <Redirect to="/" />
      </Switch>
    </AppWithStyle>
  )
}

export default App
