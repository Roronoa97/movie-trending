import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
      movies: null
  },
  mutations: {
      setMovies(state, movies){
          state.movies = movies
      }
  },
  actions: {
      getTrending({commit}){
        const api_key = process.env.VUE_APP_API_KEY
        let media_type = "movie"
        let time_window = "week"

        
        axios.get(`${process.env.VUE_APP_BASE_URL}/${media_type}/${time_window}?api_key=${api_key}`)
            .then(res => {
                let movies = res.data.results.slice(0, 10);
                console.log(movies)
                commit('setMovies', movies)
            })
      }
  },
  modules: {
  }
})
