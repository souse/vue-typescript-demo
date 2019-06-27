<template>
  <div class="home-container">
    <lux-header />
    <movie 
      v-for="(movie, index) in list" 
      :key="index" 
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import { CreateElement, VNode } from 'vue'

import Header from '../../components/Header.vue'
import Movie from '../../components/Movie/index.vue';
import './index.scss'

@Component({
  components: {
    'lux-header': Header,
    'movie': Movie
  }
})
export default class Home extends Vue {
  @State('movieList') list!: []
  @Action('getMovieList') getMovieList!: (type: string) => any

  created() {
    this.getMovieList('in_theaters')    
  }
}
</script>