let _Vue = null;
export default class Vuex {
  constructor(options) {
    this.state = options.state;
    /* 设置数据响应式 */
    _Vue.observable(this.state);
    this.getters = Object.create(null)
    Object.keys(options.getters).forEach((key) => {
      Object.defineProperty(this.getters, key, {
				get () {
					return options.getters[key](options.state);
        },
      });
    });
    this.mutations = options.mutations;
    this.actions = options.actions;
  }
  static install(Vue) {
    if (this.install.installed) return;
    this.install.installed = true;
		_Vue = Vue;
		/* 初始化时混入 */
    _Vue.mixin({
			beforeCreate () {
				if (this.$options.store) {
					_Vue.prototype.$store = this.$options.store;
				}
      },
    });
  }
	commit (method, payload) {
    this.mutations[method](this.state, payload);
  }
  dispatch(method, payload) {
    this.actions[method](this, payload);
  }
}
