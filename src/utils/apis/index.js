import axios from 'axios'
import { API_URL } from '../../constants'

export const callApi = (method, endpoint, data) => {
	return axios({
		method: method,
		url: `${API_URL}/${endpoint || ''}`,
		data: data,
		headers: {
			Authorization: `Bearer ${window.localStorage.getItem('access-token')}`
		}
	})
}
