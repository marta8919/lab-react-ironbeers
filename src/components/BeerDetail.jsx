import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import { Container } from '@material-ui/core';

export default class BeerDetail extends Component {
    state = {
        beers: []
    }

    componentDidMount(){
        // console.log(this.props.match.params.beerid)

        let id = this.props.match.params.beerid

        // console.log(id)

        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
        .then((response)=>{
            let detailBeer = {
                name : response.data.name,
                tagline : response.data.tagline,
                image : response.data.image_url,
                first_brewed : response.data.first_brewed,
                attenuation_level : response.data.attenuation_level,
                description : response.data.description,
                contributed_by : response.data.contributed_by
            }

            this.setState({
                beers : detailBeer
            })

        })
        .catch(()=>{
            console.log("err")
        })

    }

    render() {
        const {beers} = this.state

        // console.log(this.state)

        return (
            <>
                <Header />
                <Container>
                    <img src={beers.image} alt="beer" className="beerImg"></img>

                    <div className="secondaryInfo">

                        <div>
                            <h2>{beers.name}</h2>
                            <p>{beers.tagline}</p>
                        </div>

                        <div >
                            <p>{beers.first_brewed}</p>
                            <p>{beers.attenuation_level}</p>
                        </div>

                    </div>


                    <p>{beers.description}</p>
                    <p>{beers.contributed_by}</p>
                </Container>
            </>
        )
    }
}
