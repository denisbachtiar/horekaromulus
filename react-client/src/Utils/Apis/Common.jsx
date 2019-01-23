import * as config from '../../Configs'

export const getCity = (cb) => {
	config.axios.get(process.env.HOREKA_API_URL + '/getCity')
		.then((resp) => {
			if (cb) {
				cb()
			}
		})
		.catch((err) => {

		})
}
