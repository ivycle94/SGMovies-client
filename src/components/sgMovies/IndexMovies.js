import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom"
import {getAllMovies} from "../../api/sgMovies"

const IndexMovies = (prop) => {
    const [movies, setMovies] = useState(null)

    useEffect(() => {
        getAllMovies()
            .then(res => {
                setMovies(res.data.movies)
                console.log("this is movie data", res.data.movies)
            })
            .catch(console.error)
    }, [])

    if (!movies) {
        return <p>Loading...</p>
    } else if (movies.length === 0) {
        return <p>No movies yet, go add some</p>
    }

    let moviesJsx

    if (movies.length > 0 ) {
        moviesJsx = movies.map(movie => (
            <li key={movie._id}>
                <Link to={`/movies/${movie._id}`}>{movie.name}</Link>
            </li>
            
        ))
    }

    return (
        <>
            <h3>All the SG Movies</h3>
            <ul>
                {moviesJsx}
            </ul>
        </>
    )
}

export default IndexMovies