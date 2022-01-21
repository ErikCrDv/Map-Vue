import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZXJpa2NyZHYiLCJhIjoiY2t5YzV4NWZhMDd4aTJxbW80aTkyM3RkZCJ9.XQxYn91irw41eSx7IbGLMA'
    }
})

export default directionsApi;

