import React, { Component } from 'react'
import Header from './Header'
import axios from 'axios'
import {Link} from  'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


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

                <div className="beers">

                
                {
                    this.state.beers.map((singleBeer)=>{
                        return (
                            <Link to={`/beers/${singleBeer._id}`} key={singleBeer._id}>
                                <Card className="myCard">
                                <CardActionArea>
                                    <CardMedia
                                    component="img"
                                    alt="beer"
                                    height="140"
                                    image={singleBeer.image_url}
                                    title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {singleBeer.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {singleBeer.tagline}
                                        {singleBeer.contributed_by}
                                    </Typography>
                                    </CardContent>
                                </CardActionArea>
                                </Card>
                            {/* <div  >
                                <img src={singleBeer.image_url} alt="beer img"></img>
                                <div>
                                    <h3>{singleBeer.name}</h3>
                                    <h5>{singleBeer.tagline}</h5>
                                    <p>{singleBeer.contributed_by}</p>
                                </div>
                             
                            </div> */}
                            </Link>


                        )

                        
                    })
                    
                }
                
            </div>
            </div>
        )
    }
}
