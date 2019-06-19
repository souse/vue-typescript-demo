import Vue, { DirectiveOptions, VNodeDirective, PluginObject, PluginFunction } from "vue";

const directive: DirectiveOptions = {
  bind(el: HTMLElement, binding: VNodeDirective) {
    const { value } = binding;
    let obj: object = typeof value === 'function' ? value() : value;

    el.addEventListener('click', ():void => {
      console.log('trace data', obj);
    })
  }
}

interface obj {
  [key:string]: any
}
const buriedPoint = (vue: typeof Vue, options?: obj): void => {
  vue.directive('trace', directive);
}

// const buriedPoint: PluginObject<obj> = {
//   install
// }
export default buriedPoint;
export { directive };