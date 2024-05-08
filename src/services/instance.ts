import axios from 'axios';

const API_URL = process.env.API_URL || '';

export const instance = axios.create({
	baseURL: API_URL,
	headers: {
		Accept: 'application/json',
	},
	timeout: 6000,
});
