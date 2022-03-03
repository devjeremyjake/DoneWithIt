import { create } from 'apisauce';

const apiClient = create({
	baseURL: 'http://192.168.183.83:9000/api',
});

export default apiClient;
