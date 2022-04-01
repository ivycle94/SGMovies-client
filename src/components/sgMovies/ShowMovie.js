import React, {useState, useEffect} from "react"
// import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import { getOneMovie, removeMovie, updateMovie } from "../../api/sgMovies"
import  EditMovieModal  from "./EditMovieModal"

// import show function

const ShowMovies = (props) => {
    const [movie, setMovie] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    // console.log("movie id id:", id) 

    useEffect(() => {
        getOneMovie(id)
        .then(res => setMovie(res.data.movie))
        .catch(console.error)
    }, [updated])

    const removeTheMovie = () => {
        console.log("this is move id",movie.id)
        removeMovie(movie._id)
        .then(() => {navigate(`/`)})
        .catch(console.error)
    }
    
    if (!movie) {
        return (
            <h1>no movies</h1>
        )
    }

    return (
        <>
            <h1>show movie route</h1>
            <h1>{movie.name}</h1>
            <p>description: {movie.description}</p>
            <p>release year: {movie.year}</p>
            <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit
                        </Button>
            <Button onClick={() => removeTheMovie()}className="m-2" variant="danger">
                Delete
            </Button>
            <EditMovieModal 
                movie={movie}
                show={modalOpen}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateMovie={updateMovie}
                handleClose={() => setModalOpen(false)}
            />
        </>
    )
}



export default ShowMovies