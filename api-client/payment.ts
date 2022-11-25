import axiosClient from './axiosClient'

export const paymentApi = {
	payment(payload: { amount: number }, userId: string) {
		return axiosClient().post(`/users/${userId}:initBOPayment`, payload)
	},
}
