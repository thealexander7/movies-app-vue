<script setup>
import { useMovieStore } from './stores/store';

import Search from './components/Search.vue'
import Movie from './components/Movie.vue';

const setTab = (id) => {
  moviesStore.setActiveTab(id)
}

const moviesStore = useMovieStore();
</script>
<template>
  <main class="main">
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo">
      <h2>My favorite movies</h2>
    </header>
    <div class="tabs">
      <button :class="['btn', {btn_green: moviesStore.activeTab === 1}]" @click='setTab(1)'>
        Favorite
      </button>
      <button class="btn" :class="['btn', {btn_green: moviesStore.activeTab !== 1}]" @click='setTab(2)'>
        Search
      </button>
    </div>
    <div class="movies" v-if="moviesStore.activeTab === 1">
      <div>
        <h3>Watched movies (count: {{ moviesStore.watchedMovies.length }})</h3>
      <Movie 
        v-for='movie in moviesStore.watchedMovies' 
        :key='movie.id' 
        :movie='movie'
      ></Movie>
      </div>
      <h3>All movies (count: {{ moviesStore.totalCountMovies }})</h3>
      <Movie 
        v-for='movie in moviesStore.movies' 
        :key='movie.id' 
        :movie='movie'
      ></Movie>
    </div>
    <div class="search" v-else>
      <Search></Search>
    </div>
  </main>
</template>

<style lang='scss'>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  &-logo {
    max-width: 50px;
    margin-right: 10px;
  }
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;

  &:hover {
    opacity: 0.7;
  }
  &_green {
    background: #37df5c;
  }
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
