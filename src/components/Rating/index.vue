<template>
  <div class="rating">
    <span class="rating-stars">
      <span 
        class="rating-star"
        v-for="(val, index) in stars"
        :key="index"
        :class="val"
      />
    </span>
    <strong>{{ rating.average }}</strong>
    <span class="count">{{ assessCount }}人评价</span>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator'

import { Rating as Rt } from '../../utils/interface'
import './index.scss'

@Component
export default class Rating extends Vue {
  @Prop({ default: () => {} }) readonly rating!: Rt;

  get stars(): Array<string> {
    return this.getStyles(parseInt(this['rating']['stars']))
    
  }

  get assessCount(): number {
    let sum: number = 0
    const details: object = this['rating']['details']

    Object.values(details).forEach((v: number) => {
      sum += v
    })
    return sum
  }

  getStyles(stars: number, list: Array<string> = []): Array<string> {
    const _this = this;
    const num: number = stars - 10

    if (num < 0) {
      return [ ...list, 'start-half' ]
    }
    return _this.getStyles(num, [ ...list, 'start-full' ])
  }
}
</script>