<template>
    <div class="searchbar-cointaner">
        <input 
            class="form-control"
            type="text"
            placeholder="Buscar lugares..."
            v-model="searchTerm">

        <SearchResults />

    </div>
</template>

<script lang="ts">
    import SearchBar from './SearchBar'
    export default SearchBar
</script>

<style scoped>

.searchbar-cointaner {
    position: fixed;
    top: 30px; 
    left: 30px;
    background-color: white;
    z-index: 9999;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    width: 350px;
    border-radius: 5px !important;
    overflow: hidden;
    padding: 5px;
}


</style>