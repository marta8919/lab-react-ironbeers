import React, { Component } from 'react'
import Header from './Header'
import { Button, Container } from '@material-ui/core';



export default class NewBeer extends Component {
    render() {
        const {onAdd} = this.props

        return (
            <div>
                <Header />
                <Container maxWidth='sm'>
                <h1>Add a new beer</h1>
                <form onSubmit={onAdd}>
                    
                    <label>Name</label>
                    <input name="name" type="text"></input>

                    <label>Tagline</label>
                    <input name="tagline" type="text"></input>

                    <label>Description</label>
                    <input name="description" type="text"></input>

                    <label>First brewed</label>
                    <input name="first_brewed" type="text"></input>

                    <label>Brewer tips</label>
                    <input name="brewer_tips" type="text"></input>

                    <label>Attenuation level</label>
                    <input name="attenuation_level" type="number"></input>

                    <label>Contributed by</label>
                    <input name="contributed_by" type="text"></input>

                    <Button variant="contained" color="primary" type="submit">ADD NEW</Button>

                </form>
                </Container>
            </div>
        )
    }
}
