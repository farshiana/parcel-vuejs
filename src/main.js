import Vue from 'vue/dist/vue.js';
import App from './App.vue';

const app = window.addEventListener('load', () => {
	new Vue({
		"el"      : "#app",
		name      : App,
		components: { App },
		template  : '<App/>'
	});
});

if(module.hot){
	module.hot.accept();
}

export default app;