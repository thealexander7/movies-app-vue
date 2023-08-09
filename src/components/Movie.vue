<script setup>
import { useMovieStore } from '../stores/store';
import { useSearchStore } from '../stores/SearchStore';

const movieStore = useMovieStore();
const searchStore = useSearchStore();

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {}
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: () => {}
  }
})
</script>
<template>
  <div class="movie">
    <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`" :alt="movie.original_title" class="movie-img">
    <div>
      <div class="movie-name">
        {{ movie.original_title }} ({{ movie.release_date }})
      </div>
      <span class="movie-overview">
        {{ movie.overview }}
      </span>

      <div class="movie-buttons" v-if='!isSearch'>
        <button class="btn movie-buttons-watched">
          <span v-if="!movie.isWatched" @click='movieStore.toggleWatched(movie.id)'>Watched</span>
          <span v-else @click='movieStore.toggleWatched(movie.id)'>Unwatched</span>
        </button>
        <button class="btn movie-buttons-delete" @click='movieStore.deleteMovie(movie.id)'>
          Delete
        </button>
      </div>
      <div class="movie-buttons" v-else>
        <button class="btn btn_green" @click='searchStore.addToUserMovies(movie)'>
          Add
        </button>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.movie {
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 30px;
  margin-bottom: 20px;
  border: 2px solid #efefef;
  padding: 10px;
  border-radius: 10px;

  &-accept {
    margin-right: 10px;
  }
  
  &-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  &-name {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
  }
  
  &-overview {
    display: block;
    margin-bottom: 20px;
  }
  
  &-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &-buttons-watched {
    color: #fff;
    background: #1eb4c3;
  }
  
  &-buttons-watched__icon {
    width: 15px;
    margin-left: 10px;
  }
  
  &-buttons-delete {
    color: #fff;
    background: #ff2a2a;
  }
}

</style>