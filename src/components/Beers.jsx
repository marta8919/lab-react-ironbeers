import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import {Link} from  'react-router-dom'


export default class Beers extends Component {

    state = {
        beers: []
    }

    componentDidMount(){
        console.log("Component Mount")
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
         .then((response)=>{
            this.setState({
                beers: response.data
            })
         })
         .catch(()=>{
             console.log("Error moutning")
         })

    }

    render() {

        console.log("Component Render")

        return (
            <div>
                <Header/>
                
                {
                    this.state.beers.map((singleBeer)=>{
                        return (
                            <Link>
                            <div  key={singleBeer._id}>
                                <div>{singleBeer.name}</div>
                                <div>{singleBeer.tagline}</div>
                                <div>{singleBeer.contributed_by}</div>
                                <img src={singleBeer.image_url} alt="beer img"></img>
                            </div>
                            </Link>
                        )
                    })
                }
                
            </div>
        )
    }
}
