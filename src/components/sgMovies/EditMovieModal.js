import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import MovieForm from '../shared/MovieForm'

const EditMovieModal = (props) => {
    const {show, handleClose, updateMovie, triggerRefresh } = props
    const [movie, setMovie] = useState(props.movie)

    const handleChange = (e) => {
        e.persist()
        
        setMovie(prevMovie => {
            const name = e.target.name
            let value = e.target.value
            console.log('etarget type', e.target.type)
            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }
            const updatedValue = { [name]: value }

            console.log('prevMovie', prevMovie)
            console.log('updatedValue', updatedValue)

            return {...prevMovie, ...updatedValue}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log('the movie to update', movie)
        updateMovie( movie )
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            // then we send a success message
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
        console.log('this is the movie', movie)
    }

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
            <MovieForm 
                movie={movie}
                // movie= {
                //     movie.name,
                //     movie.description,
                //     movie.year
                // }
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                heading="Edit!"
            />
        </Modal.Body>
    </Modal>
    )
}

export default EditMovieModal