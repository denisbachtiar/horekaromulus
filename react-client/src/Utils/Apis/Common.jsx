import * as config from '../../Configs'

export const getCountries = (cb) => {
	config.axios.get(process.env.HOREKA_API_URL + '/getCountry')
		.then((resp) => {
			if (cb) {
				cb()
			}
		})
		.catch((err) => {

		})
}

export const getProvinces = (cb) => {
	config.axios.get(process.env.HOREKA_API_URL + '/getProvince')
		.then((resp) => {
			if (cb) {
				cb()
			}
		})
		.catch((err) => {

		})
}

export const getCities = (cb) => {
	config.axios.get(process.env.HOREKA_API_URL + '/getCity')
		.then((resp) => {
			if (cb) {
				cb()
			}
		})
		.catch((err) => {

		})
}

export const getZipCodes = (cb) => {
	config.axios.get(process.env.HOREKA_API_URL + '/getZipCode')
		.then((resp) => {
			if (cb) {
				cb()
			}
		})
		.catch((err) => {

		})
}

