document.getElementById('button1').addEventListener('click',getText);
function getText(){
	fetch('text.txt')
	.then(function(response){
		return response.text();
	})
	.then(function(data){
		console.log(data);
	})
	.catch(function(error){
		console.log(error);
	});
}

// fetching the json
document.getElementById('button2').addEventListener('click',getJSON);
function getJSON(){
	fetch('post.json')
	.then(function(response){
		return response.json();
	})
	.then(function(data){
		console.log(data);
		// outputing in the html
		let output = '';
		data.forEach( function(post) {
			output += `<li>${post.title}</li>`;
		});
	})
	.catch(function(error){
		console.log(error);
	});
}

// fetch api
document.getElementById('button3').addEventListener('click',getAPI);
function getAPI(){
	fetch('https://api.github.com/users')
	.then(response => response.json())
	.then(data => {
		console.log(data);
		// outputing in the html
		let output = '';
		data.forEach(function(user) {
			output += `<li><img src="${user.avatar_url}">${user.login}<br>${user.blog}</li>`;
		});
		document.getElementById('output').innerHTML = output;
	})
	.catch(error => console.log(error));
}