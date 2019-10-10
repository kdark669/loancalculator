// using the easyhttp 
const http = new easyHttp;
// Get posts 
// http.get('https://jsonplaceholder.typicode.com/posts',
// 	function(error,response){
// 		if(error){
// 			console.log(error);
// 		}else{
// 			console.log(response);
// 		}
// });

// post request 
// creating data 
 const data = {
 	title:'custom post',
 	body: ' this is custom post'
 };

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(error, post){
// if(error){
// 	console.log(error);
// }
// else{
// 	console.log(post);
// }
// });

// put method
// http.put('https://jsonplaceholder.typicode.com/posts/5',data,
// 	function(error, post){
// 	if(error){
// 		console.log(error);
// 	}
// 	else{
// 		console.log(post);
// 	}
// });

// delete 
http.delete('https://jsonplaceholder.typicode.com/posts/1 ',
	function(error,response){
		if(error){
			console.log(error);
		}else{
			console.log(response);
		}
});