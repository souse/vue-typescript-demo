<template>
  <div class="detail-container">
    <h1 class="title">{{ movie.title }}</h1>
    <section class="subject-info">
      <div class="left">
        <rating v-if="movie.rating != undefined" :rating="movie.rating" />
        <p class="meta">{{ describle }}</p>
      </div>
      <div class="right">
        <img :src="movie.images.medium" alt="电影图片">
      </div>
    </section>
    <div class="oprate">
      <van-button plain type="primary" size="small" @click="onOk">想看</van-button>
      <van-button plain type="primary" size="small" @click="onOk">看过</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Button, Toast, Icon } from 'vant'

import Rating from '../../components/Rating/index.vue'
import { WithRouter } from '../../utils'
import { Movie } from '../../utils/interface'
import './index.scss'

@Component({
  components: {
    'rating': Rating,
    [Button.name]: Button
  }
})
export default class Detail extends WithRouter {
  @Getter('currentMovie') movie!:  Movie

  get describle(): string {
    const { durations, genres, directors, casts, pubdates } = this.movie
    const dnames: Array<string> | undefined = directors && directors.map(d => `${d.name}(导演)`)
    const cnames: Array<string> | undefined = casts && casts.map(c => c.name)

    return `${durations && durations[0]}/${genres && genres.join('/')}${dnames && dnames.join('/')}${cnames && cnames.join('/')}${pubdates && pubdates[0]}上映`
  }

  onOk() {
    const _this = this;

    Toast({ 
      message: '欧了',
      icon: 'like-o',
      onClose() {
        _this.$router.push('/')
      }
    })
  }
}
</script>