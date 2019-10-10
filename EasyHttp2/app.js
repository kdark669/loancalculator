 const http = new EasyHTTP;

//  // get users 
// const users = http.get('https://jsonplaceholder.typicode.com/users')
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error));
// 	
// user data
const data = {
	name:"Rajeev  Rajchal",
	username:"jhondo",
	email:"iii@gmail.com"
}
// crete post 
// http.post('https://jsonplaceholder.typicode.com/users',data)
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error));

// update using put 
// http.put('https://jsonplaceholder.typicode.com/users',data)
// 	.then(data => console.log(data))
// 	.catch(error => console.log(error));
// 	delete
http.delete('https://jsonplaceholder.typicode.com/users')
	.then(data => console.log(data))
	.catch(error => console.log(error));