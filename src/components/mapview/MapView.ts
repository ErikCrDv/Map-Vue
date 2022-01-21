import { defineComponent, ref, onMounted, watch } from 'vue';
import { usePlacesStore, useMapStore } from '@/composables/';
import Mapboxgl from 'mapbox-gl';

export default defineComponent({
    name: 'MapView',
    setup(){
        const { userLocation, isUserLocationReady } = usePlacesStore()
        const { setMap } = useMapStore()

        const mapElement = ref<HTMLDivElement>();

        const initMap = async () => {
            if( !mapElement.value ) throw new Error('DivElement no exist')
            if( !userLocation.value ) throw new Error('userLocation no exist')
            await Promise.resolve();

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15 // starting zoom
            });

            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat( userLocation.value )
                .setHTML(`
                    <h4>Aqui estoy</h4>
                    <p>Actualmente en ...</p>
                    <p>${ userLocation.value }</p>
                `);

            const myLocationMarker = new Mapboxgl.Marker()
                .setLngLat( userLocation.value )
                .setPopup( myLocationPopup )
                .addTo( map )

            // 
            setMap( map )
        }

        onMounted( () => {
            if( isUserLocationReady.value )
                return initMap()
        })

        watch( isUserLocationReady, () => {
            if( isUserLocationReady.value )
                initMap()
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }

});