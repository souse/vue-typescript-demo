<template>
  <div class="header-container">
    <div class="search-container">
      <van-search
        placeholder="请输入电影名称"
        :clearable="true" 
        @input="onInput"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { CreateElement } from 'vue'

import { Search } from 'vant'
// import 'vant/es/search/style/less'

@Component({
  components: {
    [Search.name]: Search
  }
})
export default class Header extends Vue {
  onInput(val) {
    this.$emit('search', val)
  }
}
</script>

<style lang="scss">
.header-container {
  position: sticky;
  top: 0;
  z-index: 100;
} 
</style>