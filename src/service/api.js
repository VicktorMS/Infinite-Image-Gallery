import axios from "axios"
import dotenv from "dotenv"

const apiKey = import.meta.env.VITE_REACT_APP_UNSPLASH_API_KEY


export function printApiKey(){
    console.log(JSON.stringify( apiKey) )
}
export function getPhotosList(){
    axios.get("https://api.unsplash.com/photos").then((res)=>res.data)
}