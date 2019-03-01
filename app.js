const app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World!'
	},
	methods: {
		send () {
			axios.post('https://developer.ebay.com/register_upgrade_keyset', { username: 'getYoShitTogethaBrah' })
			.then(res => {
				console.log('Sent')
			})
			.catch(err => {
				console.log('Errored out')
			})
		}
	}
})
