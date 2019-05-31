import axios from 'axios'

const CONFIG = {
	url: 'localhost',
	port: '8000'
}

function logMe (arg) {
	console.log(arg)
}

export default { logMe }