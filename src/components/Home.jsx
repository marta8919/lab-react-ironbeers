import React from  'react'
import {Link} from  'react-router-dom'

function Home() {
return (
    <>
    <div>
        <img src="public/assets/beer.png" alt=""/>
        <Link  to="/beers">All Beers</Link>
    </div>
	<div>
        <Link  to="/random-beer">Random Beers</Link>
    </div>
    <div>
        <Link  to="/add-beer">New Beer</Link>
    </div>

    </>
	)
}
export  default Home
