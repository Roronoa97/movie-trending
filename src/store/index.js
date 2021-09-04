import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
      movies: null,
      // genres: null,
      currentMovie: null
  },
  mutations: {
      setMovies(state, data){
          let movies = data.movies
          let allGenres = data.allGenres.genres
          movies.forEach((movie, index) => {
            let genresId = movie.genre_ids;
            let moviesGenre = allGenres.filter( genre => genresId.includes(genre.id) );
            movie.moviesGenre = moviesGenre
            if(index == 0){
                movie.selected = true;
                state.currentMovie = index
            }else{
                movie.selected = false;
            }
          })
          state.movies = movies
      },
    //   setGenres(state, genres){
    //     state.genres = genres
    //   },
      selectedMovie(state, movieId){
            let movies = state.movies
            movies.forEach((movie, index) => {
                if(movie.id == movieId){
                    movie.selected = true
                    state.currentMovie = index
                }else{
                    movie.selected = false
                }
            })
            state.movies = movies
      }
  },
  getters: {
      getMovies(state){
          return state.movies
      },
      getCurrentMovie(state){
          return state.currentMovie
      },
    //   getGenres(state){
    //       return state.genres
    //   }
  },
  actions: {
      getTrending({dispatch}){
        let media_type = "movie"
        let time_window = "week"

        
        axios.get(`${process.env.VUE_APP_BASE_URL}/trending/${media_type}/${time_window}?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                let movies = res.data.results.slice(0, 10);
                dispatch('getGenres', movies)
                //commit('setMovies', movies)
            })
      },
      selectMovie({commit}, movieId){
          commit('selectedMovie', movieId)
      },
      getGenres({commit}, movies){
          axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_API_KEY}`)
            .then(res => {
                let allGenres = res.data
                commit('setMovies', {movies, allGenres})
            })
      }
  },
  modules: {
  }
})
