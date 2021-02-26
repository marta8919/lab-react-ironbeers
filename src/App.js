import React, { Component } from 'react'
import './App.css';
import Home from './components/Home'
import {Route, Switch} from  'react-router-dom'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import AddBeer from './components/NewBeer'



class App extends Component {
  render() {
    return (
     <div>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" component={Beers}/>
          <Route exact path="/beers/:beerid"/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/add-beer" component={AddBeer}/>
       </Switch>
     </div>
    )
  }
}



export default App;
