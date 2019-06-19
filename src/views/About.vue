<script lang="tsx">
import { Component } from 'vue-property-decorator';
import Vue, { CreateElement } from 'vue';
import Introduction from '../components/Introduction';

@Component({
  components: {
    Introduction
  }
})
export default class About extends Vue {
  render(h: CreateElement) {
    return (
      <div class="about">
        <h1>This is an about page</h1>
        <Introduction />
      </div>
    )
  }  
}
</script>

<style lang="scss">
h1 {
  color: #ce1111;
}
</style>
