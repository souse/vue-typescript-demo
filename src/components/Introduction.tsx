import { Vue, Component } from 'vue-property-decorator';
import { CreateElement } from 'vue';

@Component({})
export default class Introduction extends Vue {
  render(h: CreateElement) {
    return (
      <h2>下面是自我介绍内容：</h2>
    ) 
  }
}