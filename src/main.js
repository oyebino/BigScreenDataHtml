import 'normalize.css';
import './styles/main.less';
import axios from './utils/axiosConf';
import Vue from 'vue';
import App from './App.vue';

new Vue({
	el: '#app',
	axios,
	data: {},
	render: h => h(App)
});
