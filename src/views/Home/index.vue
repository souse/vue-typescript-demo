<template>
  <div class="home-container">
    <lux-header @search="search" />
    <movie 
      v-for="(movie, index) in mvs" 
      :key="index"
      :movie="movie"
    />
    <van-loading v-if="loading" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { Action, State } from 'vuex-class'
import { CreateElement, VNode } from 'vue'
import { Loading} from 'vant'

import Header from '../../components/Header.vue'
import Movie from '../../components/Movie/index.vue'
import { Movie as MV } from '../../utils/interface'
import './index.scss'

@Component({
  components: {
    'lux-header': Header,
    'movie': Movie,
    [Loading.name]: Loading
  }
})
export default class Home extends Vue {
  private loading: boolean = true
  private mvs: Movie[] = []

  @State('movieList') list!: []
  @Action('getMovieList') getMovieList!: (type: string) => any
  
  async created() {
    const { subjects } = await this.getMovieList('in_theaters')

    this.mvs = subjects;
    this.loading = false
  }

  search(v: string): void {
    const { list } = this

    v == '' ?
      this.mvs = list :
      this.mvs = list.filter((l: MV) => {
        if (l.title) return l.title.indexOf(v) !== -1
      })
  }
}
</script>