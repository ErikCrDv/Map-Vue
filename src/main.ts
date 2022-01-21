import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiZXJpa2NyZHYiLCJhIjoiY2t5YzV4NWZhMDd4aTJxbW80aTkyM3RkZCJ9.XQxYn91irw41eSx7IbGLMA';

if( !navigator.geolocation ) 
    throw new Error('Tu navegador no soporta el GeoLocation')

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
