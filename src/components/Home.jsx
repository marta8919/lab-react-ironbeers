import React from  'react'
import {Link} from  'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 2000,
    },
  });


function Home() {

    const classes = useStyles();

return (

    <>

    <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
            component="img"
            alt="Beer"
            height="340"
            image="../assets/beers.png"
            title="Beer"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            <Link  to="/beers">All Beers</Link>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum ea magnam incidunt sunt doloribus. Asperiores nisi nostrum corrupti accusantium quam? Explicabo deleniti ex veniam libero dolorem dicta exercitationem fuga.
            </Typography>
        </CardContent>
        </CardActionArea>
    </Card>

    <Card className={classes.root}>
    <CardActionArea>
    <CardMedia
        component="img"
        alt="Beer"
        height="340"
        image="../assets/random-beer.png"
        title="Beer"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        <Link  to="/random-beer">Random Beers</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum ea magnam incidunt sunt doloribus. Asperiores nisi nostrum corrupti accusantium quam? Explicabo deleniti ex veniam libero dolorem dicta exercitationem fuga.
        </Typography>
    </CardContent>
    </CardActionArea>
    </Card>

    <Card className={classes.root}>
    <CardActionArea>
    <CardMedia
        component="img"
        alt="Beer"
        height="340"
        image="../assets/new-beer.png"
        title="Beer"
    />
    <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
        <Link  to="/add-beer">New Beer</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rerum ea magnam incidunt sunt doloribus. Asperiores nisi nostrum corrupti accusantium quam? Explicabo deleniti ex veniam libero dolorem dicta exercitationem fuga.
        </Typography>
    </CardContent>
    </CardActionArea>
    </Card>

    </>


	)
}
export  default Home
