


function Submit(){
let name=document.getElementById("name")
let email=document.getElementById("email")
let number=document.getElementById("number")
let inquiry=document.getElementById("question")

 
document.getElementById("overlay2").style.display = "block"

const data = JSON.stringify({
	sendto: 'zibusisonduna2001@gmail.com',
	name: name.value,
	replyTo: email.value,
	ishtml: 'false',
	title: 'inquiry requests',
	body: `email: `
});

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('POST', 'https://mail-sender-api1.p.rapidapi.com/');
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.setRequestHeader('X-RapidAPI-Key', 'a2935f3471msh03e57ecfdd61e6cp1b0c67jsn9b5aa5d546de');
// xhr.setRequestHeader('X-RapidAPI-Host', 'mail-sender-api1.p.rapidapi.com');

xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('X-RapidAPI-Key', '4298e3da2emshf39b08d3bbe2f3cp1ff22ajsn4b60a977651a');
    xhr.setRequestHeader('X-RapidAPI-Host', 'mail-sender-api1.p.rapidapi.com');

xhr.send(data);









// 	const url = 'https://mail-sender-api1.p.rapidapi.com/';
// 	const options = {
// 		method: 'POST',
// 		headers: {
// 			'content-type': 'application/json',
//     'X-RapidAPI-Key': 'a2935f3471msh03e57ecfdd61e6cp1b0c67jsn9b5aa5d546de',
//     'X-RapidAPI-Host': 'mail-sender-api1.p.rapidapi.com'
// 		},
// 		body: {
// 			sendto: 'zibusisonduna2001@gmail.com',
// 			name: '',
// 			replyTo: 'zibusisonduna2001@gmail.com',
// 			ishtml: 'false',
// 			body: '',
// 		}
// 	};
	
// 	fetch(url, options);
// 	// try {
// 	// 	const response = fetch(url, options);
// 	// 	// const result = response.text();
// 	// 	// console.log(result);
// 	// } catch (error) {
// 	// 	console.error(error);
// 	// }
// }

}

function OK(){
	document.getElementById("overlay2").style.display = "none"
}