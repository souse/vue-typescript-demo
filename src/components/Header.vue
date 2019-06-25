<template>
  <div class="header-container">
    <div class="search-container">
      <van-search
        v-model="query"
        :clearable="true" 
        placeholder="请输入电影名称"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { CreateElement } from 'vue';

import { Search } from 'vant';

@Component({
  components: {
    [Search.name]: Search
  }
})
export default class Header extends Vue {
  query: string = '';
}
</script>