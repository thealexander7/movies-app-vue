import { defineStore } from 'pinia';
import { useMovieStore } from './store';
import { ref } from 'vue';  

const url = 'https:api.themoviedb.org/3/search/movie?api_key=aa5d9bbaa521556c173ebc4e12b23deb&query=';

// options api

// export const useSearchStore = defineStore("searchStore", {
//   state: () => ({
//     loader: false,
//     movies: []
//   }),
//   actions: {
//     async getMovies(search) {
//       this.loader = true

//       const res = await fetch(`${url}${search}`)
//       const data = await res.json()

//       this.movies = data.results

//       this.loader = false
//     },

//     addToUserMovies(object) {
//       const movieStore = useMovieStore();

//       movieStore.movies.push({...object, isWatched: false})
//       movieStore.activeTab = 1
//     }
//   }
// }) 



export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false)
  const movies = ref([])

  const getMovies = async(search) => {
    loader.value = true

    const res = await fetch(`${url}${search}`)
    const data = await res.json()

    movies.value = data.results

    loader.value = false
  }

  const addToUserMovies = (object) => {
    const movieStore = useMovieStore();
    console.log(object)
    movieStore.movies.push({...object, isWatched: false})
    movieStore.activeTab = 1
  }

  return {
    loader,
    movies,
    getMovies,
    addToUserMovies
  }
})