import { Vue, Component } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';

@Component
export default class Home extends Vue {
  render(h: CreateElement): VNode {
    return(
      <div class="home-container">
        <h1>Home Page</h1>
      </div>
    )
  }
}