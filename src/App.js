import React, { Component } from 'react'
import './App.css';
import Home from './components/Home'
import {Route, Switch, withRouter} from  'react-router-dom'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import AddBeer from './components/NewBeer'
import BeerDetail from './components/BeerDetail';
import axios from 'axios'



class App extends Component {

  state = {
    beers: [],
    filteredBeers : []
  }

  // componentDidMount(){
  //     console.log("Component Mount on App.js")
  //     axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
  //     .then((response)=>{
  //         this.setState({
  //             beers: response.data,
  //         })
  //     })
  //     .catch(()=>{
  //         console.log("Error moutning")
  //     })

  // }

  handleSubmit=(event)=>{
    event.preventDefault()

    let newBeer = {
      name : event.target.name.value,
      tagline : event.target.tagline.value,
      description : event.target.description.value,
      first_brewed: event.target.first_brewed.value,
      brewer_tips: event.target.brewer_tips.value,
      attenuation_level: event.target.attenuation_level.value,
      contributed_by: event.target.contributed_by.value
    }

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
     .then((response)=>{
       console.log(response.data)
       this.setState({
         beers: [...this.state.beers]//pk si quito response.data funciona???
       }, ()=>{
         this.props.history.push('/')
       })
     })
     .catch(()=>{
       console.log("Error on form")
     })

     console.log(this.state.beers)
  }

  handleSearch=(event)=>{
    let filteredBeers = this.state.beers.filter(beer => {
      return beer.name.toLowerCase().includes(event.target.value.toLowerCase())
    })

    this.setState({
      beers : filteredBeers
    })

  }

  render() {
    return (
     <div>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/beers" render={()=>{
            return <Beers onSearch={this.handleSearch}/>
          }} />
          <Route exact path="/beers/:beerid" render={(routeProps)=>{
            return <BeerDetail {...routeProps}/>
          }}/>
          <Route exact path="/random-beer" component={RandomBeer}/>
          <Route exact path="/add-beer" render={()=>{
            return <AddBeer onAdd={this.handleSubmit}/>
          }}/>
       </Switch>
     </div>
    )
  }
}



export default withRouter(App);
