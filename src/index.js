import Alert from './alert/index.js';
import Alert2 from './alert/index.js';


const components = [
  Alert, Alert2
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}



export {
  install,
  Alert,
  Alert2
};

export default {
  install,
  Alert,
  Alert2
};
