import axios from "axios"

const apiKey = import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY

export const api = axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: `Client-ID ${apiKey}`
    }
})

export const getPhotosPage = async(pageParam = 1, options = {}) => {
    const response = await api.get(`/photos?page=${pageParam}`, options)
    return response.data
}

export const searchPhotos = async(pageParam = 1, query ,options = {}) => {
    const response = await api.get(`/search/photos?page=${pageParam}&query=${query}`, options)
    return response.data
}

// const apiUrl = "https://api.unsplash.com/"

// export function printApiKey(){
//     console.log(`${apiUrl}photos?client_id=${apiKey}`) 
// }

// export function getPhotosPage(){
//     return axios.get(`${apiUrl}photos?client_id=${apiKey}`).then((res)=>res.data)
// }