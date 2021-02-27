import React, { Component } from 'react'
import {Link} from  'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link  to="/"><FontAwesomeIcon icon={faHome} /></Link> 
            </div>
        )
    }
}
