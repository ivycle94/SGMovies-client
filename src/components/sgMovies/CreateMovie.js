import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createMovie} from '../../api/sgMovies'

const CreateMovie = (props) => {
    const [movie, setMovie] = useState({name:"", description: "", year: ""})
    console.log("movie in create", movie)

    const handleChange = (e) => {
        e.persist()

        setMovie(prevMovie => {
            const name = e.target.name
            const value = e.target.value
            const updatedValue = { [name]: value }
            console.log('prevMovie', prevMovie)
            console.log('updatedValue', updatedValue)

            return {...prevMovie, ...updatedValue}
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('this is the movie', movie)
        createMovie(movie)
            .then(res => {console.log(res.data.movie)})
            .catch(err => console.log(err))
    }
    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    placeholder="Movie Name"
                    value={movie.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Description</Form.Label>
                <Form.Control 
                    placeholder="Movie Description"
                    value={movie.description}
                    name='description'
                    onChange={handleChange}
                />
                <Form.Label>Release Year</Form.Label>
                <Form.Control 
                    placeholder="Movie Release Year"
                    value={movie.year}
                    name='year'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default CreateMovie
