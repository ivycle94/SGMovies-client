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