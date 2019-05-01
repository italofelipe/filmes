import axios from 'axios';

const API = axios.create({
	baseURL: './API.js'
});

export default API;
