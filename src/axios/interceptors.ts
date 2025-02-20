const requestInterceptor = (config: any) => config

const responseSuccessInterceptor = (response: any) => response.data

const responseErrorInterceptor = (error: any) => {
	const response = error.response || error
	return Promise.reject(response)
}

export { requestInterceptor, responseSuccessInterceptor, responseErrorInterceptor }
