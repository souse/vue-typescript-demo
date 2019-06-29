<template>
  <div class="cart-container">
    <div class="cart-list">
      都是一个套路，暂时不做实现。
    </div>
    <div class="buy-content">
      <div>描述信息</div>
      <van-button type="primary" @click="onBuy">结算</van-button>  
    </div>  
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import { Button } from 'vant'

import { WithRouter } from '../../utils'
import { Movie } from '../../utils/interface'
import './index.scss'

@Component({
  components: {
    [Button.name]: Button
  }
})
export default class Cart extends WithRouter {
  @Getter('currentMovie') movie!:  Movie

  onBuy() {
    this.$router.push('/')
  }
}
</script>