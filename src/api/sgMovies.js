import apiUrl from "../apiConfig";
import axios from "axios";

// index function
export const getAllMovies = () => {
    return axios(`${apiUrl}/movies`)
}


// show function
export const getOneMovie = (movieId) => {
    return axios(`${apiUrl}/movies/${movieId}`)
}

// create -POST->  function
export const createMovie = (movie) => {
    console.log('this is newMovie', movie)
    return axios({
        url: `${apiUrl}/movies`,
        method: 'POST',
        //had to break down data because got viladarion mongoose error
        data: { 
            name: movie.name,
            description: movie.description,
            year: movie.year 
        }
    })
}

// edit -PATCH-> function
export const updateMovie = (updatedMovie) => {
    console.log('this is newMovie', updatedMovie)
    return axios({
        url: `${apiUrl}/movies/${updatedMovie._id}`,
        method: 'PATCH',
        data: { 
            name: updatedMovie.name,
            description: updatedMovie.description,
            year: updatedMovie.year
        }
    })
}

// delete route
export const removeMovie = (movieId) => {
    console.log("this is the movie id in delete func", movieId)
    return axios({
        url: `${apiUrl}/movies/${movieId}`,
        method: 'DELETE'
    })
}
