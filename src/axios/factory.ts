import axios from 'axios'
import {
	requestInterceptor,
	responseSuccessInterceptor,
	responseErrorInterceptor,
} from './interceptors'

function Factory(baseURL: string) {
	const instance = axios.create({
		baseURL,
	})

	instance.interceptors.request.use(requestInterceptor)

	instance.interceptors.response.use(responseSuccessInterceptor, responseErrorInterceptor)

	return instance
}

export default Factory
