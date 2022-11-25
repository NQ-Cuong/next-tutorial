import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'

const axiosClient = (showHeader: boolean = false) => {
	const axiosConfig = axios.create({
		baseURL: 'https://nportal-api.shwe.vip/api',
		headers: {
			'Content-Type': 'application/json',
		},
	})

	// Add a request interceptor
	axiosConfig.interceptors.request.use(
		function (config: AxiosRequestConfig) {
			const customHeaders: any = {}
            if (typeof window !== 'undefined') {
                const token = localStorage.getItem('token');
                if (token) {
                    customHeaders.Authorization = `Bearer ${token}`
                }
              }
			return {
				...config,
				headers: {
					...customHeaders,
					...config.headers
				}
			}
		},
		function (error) {
			// Do something with request error
			return Promise.reject(error)
		}
	)

	// Add a response interceptor
	axiosConfig.interceptors.response.use(
		function (response: AxiosResponse) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data
			if (showHeader) {
				return response
			}
			return response.data
		},
		function (error) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error?.response?.data)
		}
	)

	return axiosConfig
}

export default axiosClient
