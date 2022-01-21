<template>
    <div 
        v-if="isLoadingPlaces" 
        class="alert alert-primary text-center">
        <h5>Carganfo</h5>
        <span>espere por favor...</span>
    </div>
    <ul 
        v-else-if="places.length > 0"
        class="list-group mt-3">
        <li
            v-for="place in places"
            :class="{ 'active': place.id === activePlace }"
            :key="place.id"
            class="list-group-item list-group-item-action"
            @click="onPlaceClicked( place )">
                <h5>{{ place.text }}</h5>
                <p>{{ place.place_name }}</p>
                <div align="right">
                    <button 
                        class="btn btn-outline-primary btn-sm"
                        :class="( place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary' "
                        @click.self="getRouteDirections(place)">
                        Direccion
                    </button>
                </div>
        </li>
    </ul>
</template>

<script lang="ts">
    import SearchResults from './SearchResults'
    export default SearchResults
</script>

<style scoped>
li {
    cursor: pointer;
}

h5 {
    font-size: 18px !important;
}

p {
    font-size: 12px !important;
}
</style>