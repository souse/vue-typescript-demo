import { Vue, Component } from 'vue-property-decorator';
import { CreateElement } from 'vue';

import { Search } from 'vant';

@Component({
  components: {
    Search
  }
})
export default class Header extends Vue {

  render(h: CreateElement) {
    return (
      <div class="header-container">
        <div class="search-container">
          {/* <Search placeholder="请输入搜索关键词" />  */}
        </div>
      </div>
    );
  }
}