import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useParams, useNavigate } from 'react-router-dom'
import { getOneMovie } from "../../api/sgMovies"

// import show function

const ShowMovies = (props) => {
    const [movie, setMovie] = useState(null)
    const { id } = useParams()
    console.log("movie id id:", id) 

    useEffect(() => {
        getOneMovie(id)
        .then(res => setMovie(res.data.movie))
        .catch(console.error)
        }, [])

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

        </>
    )
}



export default ShowMovies