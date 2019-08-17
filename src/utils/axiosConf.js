import Vue from 'vue';
import axios from 'axios';

axios.defaults.timeout = 20000;
axios.defaults.baseURL = window.location.origin + '/';

axios.interceptors.request.use(
	config => {
		return config;
	},
	err => Promise.reject(err)
);

axios.interceptors.response.use(
	response => {
		return response.data;
	},
	err => {
		return Promise.reject(err);
	}
);

export const httpGet = (url, params, config = {}) => {
	let formatParams = {
		params
	};
	if (config) {
		formatParams = Object.assign(formatParams, config);
	}
	return new Promise((resolve, reject) => {
		axios
			.get(url, formatParams)
			.then(
				res => {
					resolve(res);
				},
				err => {
					reject(err);
				}
			)
			.catch(err => {
				reject(err);
			});
	});
};

Vue.prototype.$httpGet = httpGet;
export default axios;
