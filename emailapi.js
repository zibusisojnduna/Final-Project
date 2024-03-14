const url = 'https://mail-sender-api1.p.rapidapi.com/';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': 'a2935f3471msh03e57ecfdd61e6cp1b0c67jsn9b5aa5d546de',
		'X-RapidAPI-Host': 'mail-sender-api1.p.rapidapi.com'
	},
	body: {
		sendto: 'zibusisonduna2001@gmail.com',
		name: 'Custom Name Here',
		replyTo: 'Your Email address where users can send their reply',
		ishtml: 'false',
		number: '',
		title: 'Put Your Title Here',
		body: 'Put Your Body here Html / Text'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}