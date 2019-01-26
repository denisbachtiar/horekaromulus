const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;
const path = require('path');
const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('/Horeka/rest/HorekaStoreService/getCountry', (req, res) => {
	res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({
		response: {
			countryList: {
				'country-list': [
					{
						'country-no': 1,
						'country-name': 'Indonesia',
						'country-code': 'INA'
					},
					{
						'country-no': 2,
						'country-name': 'Singapore',
						'country-code': 'SIN'
					},
					{
						'country-no': 3,
						'country-name': 'Malaysia',
						'country-code': 'MAY'
					},
				]
			}
		}
	}));
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});