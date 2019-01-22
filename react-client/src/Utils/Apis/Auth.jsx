import * as config from '../../Configs'

export const register = (storeRegister, cb) => {
	config.axios.post(process.env.HOREKA_API_URL + '/storeRegister', storeRegister)
		.then((resp) => {
			if (cb) {
				cb()
			}
		})
		.catch((err) => {

		})
}
