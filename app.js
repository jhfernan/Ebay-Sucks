const app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World!'
	},
	methods: {
		send () {
			.post('https://developer.ebay.com/register_upgrade_keyset', { username: 'getYoShitTogethaBrah' })
			.then(res => {
				console.log('Sent')
			})
			.catch(err => {
				console.log('Errored out')
			})
		}
	},
	mounted () {
		axios
			.get('https://api.coindesk.com/v1/bpi/currentprice.json')
			.then(res => {
				console.log(res)
			})
	}
})
