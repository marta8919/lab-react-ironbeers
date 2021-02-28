import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Container } from '@material-ui/core';



export default class RandomBeer extends Component {
    state = {
        beers : []
    }

    componentDidMount(){
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
         .then((response)=>{
            this.setState({
                beers : response.data
            })
         })
         .catch(()=>{
             console.log("Err")
         })
    }

    componentWillUnmount(){
        console.log("Random Beers Unmouted")
    }


    render() {
        const {beers} = this.state

        return (
            <>
                <Header />

                <Container>

                <img src={beers.image_url} alt="beer" className="beerImg"></img>

                <div className="secondaryInfo">

                    <div>
                        <h2>{beers.name}</h2>
                        <p>{beers.tagline}</p>
                    </div>


                </div>

                <p>{beers.contributed_by}</p>

                </Container>

            </>
        )
    }
}
