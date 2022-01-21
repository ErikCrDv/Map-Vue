import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZXJpa2NyZHYiLCJhIjoiY2t5YzV4NWZhMDd4aTJxbW80aTkyM3RkZCJ9.XQxYn91irw41eSx7IbGLMA'
    }
})

export default searchApi;