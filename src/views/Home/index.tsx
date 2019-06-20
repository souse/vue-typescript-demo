import { Vue, Component } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';

import './index.scss';

@Component
export default class Home extends Vue {

  render(h: CreateElement): VNode {
    return(
      <div class="home-container">
        ddd
      </div>
    )
  }
}