import apiUrl from "../apiConfig";
import axios from "axios";

// index function
export const getAllMovies = () => {
    return axios(`${apiUrl}/movies`)
}
