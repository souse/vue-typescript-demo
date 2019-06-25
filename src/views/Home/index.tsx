import { Vue, Component } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';

import Header from '../../components/Header.vue';
import './index.scss';

@Component({
  components: {
    Header
  }
})
export default class Home extends Vue {

  render(h: CreateElement): VNode {
    return(
      <div class="home-container">
        <Header />
      </div>
    )
  }
}