import axios from "axios";

export const baseURL = "http://localhost:8080/api/v1"

export const axiosClient = axios.create({
    baseURL: baseURL,  
});