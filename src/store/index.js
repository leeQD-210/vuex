import Vue from 'vue';
import Vuex from '../vuex';
Vue.use(Vuex);
const store = new Vuex({
  state: {
    username: 'name',
	},
	getters: {
		reverseName (state) {
			return state.username.split('').reverse().join('')
		}
	},
  mutations: {
    changeName(state, payload) {
      state.username = payload;
    },
  },
  actions: {
    getName(context, payload) {
      setTimeout(() => {
        context.commit('changeName', payload);
      }, 2000);
    },
  },
});
export default store