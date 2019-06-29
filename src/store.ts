import Vue from 'vue'
import Vuex, { Commit } from 'vuex'
import { States, Movie } from './utils/interface';
import { searchMovies } from './service/index';

Vue.use(Vuex)

let state: States = {
  movieList: [],
  currentMovie: {}
}

export default new Vuex.Store({
  state,
  getters: {
    currentMovie(state: States): Movie {
      const mv = state.currentMovie
      const lsMovie: string | null = localStorage.getItem('MOVIE')

      // console.log(!!Object.keys(mv).length ? mv : lsMovie !== null ? JSON.parse(lsMovie) : {})
      return !!Object.keys(mv || {}).length ? mv : lsMovie !== null ? JSON.parse(lsMovie) : {}
    },
  },
  mutations: {
    setMovieList(state: States, payload: { list: Movie[] }): void {
      state.movieList = payload.list
    },
    setCurrentMovie(state: States, payload: { v: Movie }): void {
      state.currentMovie = payload.v
      localStorage.setItem('MOVIE', JSON.stringify(payload.v))
    }
  },
  actions: {
    async getMovieList(context: { commit: Commit, state: States }, type: string): Promise<any> {
      return searchMovies(type).then(res => {
        // console.log('searchMovies res => ', res)
        context.commit('setMovieList', { list: res.subjects })
        return res
      })
    }    
  }
})
