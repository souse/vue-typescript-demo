<template>
  <section class="movie-container">
    <div class="main-block">
      <div class="avatar">
        <!-- <img src="../../assets/auto.jpg" alt="电影图片"> -->
        <img :src="movie.images.medium" alt="电影图片">
      </div>
      <div class="content-wrapper">
        <div class="content">
          <div class="movie-title">{{ movie.title }}</div>
          <div class="movie-detail">
            <div class="score">
              <strong>评分:</strong>
              <span>{{ movie.rating.average }}</span>
            </div>
            <div class="actor">主演：{{ casts }}</div>
            <div class="director">导演：{{ directors }}</div>
          </div>
        </div>
        <van-button class="button" type="primary" size="small">购票</van-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator'
import { Button } from 'vant'

import { Person } from '../../utils/interface'
import './index.scss'

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class Movie extends Vue {
  @Prop({ default: () => {} }) readonly movie!: object
  
  get msrc(): string {
    // return this.movie['images']['medium'].split('.com')[1]
    return ''
  }
  
  get casts(): string {
    return this.getNames(this.movie['casts'])
  }

  get directors(): string {
    return this.getNames(this.movie['directors'])
  }

  getNames(arr: Person[]): string {
    return arr.map(a => a.name).join(',')
  }
}
</script>