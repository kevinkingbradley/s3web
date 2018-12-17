function countBreeds(){
	const axios = require('axios')
	
	const getBreeds = async () => {
		try {
			return await axios.get('https://dog.ceo/api/breeds/list/all')
		} catch (error) {
			console.error(error)
		}
	}
	
	const countBreeds = async () => {
		const breeds = await getBreeds()
	
		if (breeds.data.message) {
			console.log('Got ${Object.entries(breeds.data.message).length} breeds')
		}
	}
}

function derp(){
	alert("derp");
}

// Access Key: AKIAIXO57CS2W3MN2XUA
// Secret Key: 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