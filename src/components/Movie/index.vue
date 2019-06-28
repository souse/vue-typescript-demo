<template>
  <section class="movie-container">
    <div class="main-block">
      <div class="avatar">
        <img src="../../assets/auto.jpg" alt="电影图片">
      </div>
      <div class="content-wrapper">
        <div class="content">
          <div class="movie-title">{{ movie.title }}</div>
          <div class="movie-detail">
            <div class="score">
              <strong>评分:</strong>
            </div>
            <div class="actor">主演：</div>
            <div class="director">导演：</div>
          </div>
        </div>
        <van-button class="button">购票</van-button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator'
import { Button } from 'vant'

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
}
</script>