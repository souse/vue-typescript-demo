import Vue from 'vue'
import Vuex, { Commit } from 'vuex'
import { States, Movie } from './utils/interface';
import { searchMovies } from './service/index';

Vue.use(Vuex)

let state: States = {
  movieList: []
}

export default new Vuex.Store({
  state,
  mutations: {
    setMovieList(state: States, payload: { list: Movie[] }): void {
      state.movieList = payload.list
    }
  },
  actions: {
    async getMovieList(context: { commit: Commit, state: States }, type: string): Promise<any> {
      return searchMovies(type).then(res => {
        console.log('searchMovies res => ', res)
        context.commit('setMovieList', { list: res.subjects })
        return res
      })
    }    
  }
})
