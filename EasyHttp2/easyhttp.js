// *
// * @version 2.0
// * @author Rajeev Rajchal
// * @license MLT
// *
// **

class EasyHTTP {
	// make http guest request 
	get(url){
		return new Promise((resolve, reject) => {
			fetch(url)
			.then(res => res.json())
			.then(data => resolve(data)) 
			.catch(error => reject(error));
		});	
	}

	// make an http post request 
	post(url, data){
		return new Promise((resolve, reject) => {
			fetch(url, {
				method:'POST',
				header:{
					'Content-type':'application/json'
				},
				body:JSON.stringify(data)
			})
			.then(res => res.json())
			.then(data => resolve(data)) 
			.catch(error => reject(error));
		});	
	}	

	// make an http put request 
	put(url, data){
		return new Promise((resolve, reject) => {
			fetch(url, {
				method:'PUT',
				header:{
					'Content-type':'application/json'
				},
				body:JSON.stringify(data)
			})
			.then(res => res.json())
			.then(data => resolve(data)) 
			.catch(error => reject(error));
		});	
	}

// make an http delete request 
	delete(url){
		return new Promise((resolve, reject) => {
			fetch(url, {
				method:'DELETE',
				header:{
					'Content-type':'application/json'
				},
				body:JSON.stringify(data)
			})
			.then(res => res.json())
			.then(() => resolve('Resource Deleted')) 
			.catch(error => reject(error));
		});	
	}	
}