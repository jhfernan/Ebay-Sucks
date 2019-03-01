const app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World!'
	},
	methods: {
		send () {
			let array = Array(10000).fill().map((_,i) => i + 1)
			for (var i = 0; i < array.length; i++) {
				axios.post('https://developer.ebay.com/register_upgrade_keyset', { username: 'getYoShitTogethaBrah' })
				.then(res => {
					console.log('Sent')
				})
				.catch(err => {
					console.log('Errored out')
				})
			}
		}
	}
})
