 // intilizing the fucntion.
 function easyHttp ( ) {
 	// as xhr we use this.http 
 	this.http = new XMLHttpRequest();
 }

 // creating four prototypes eg get, post, put and delete 
 // get request
 easyHttp.prototype.get = function (url, callback) {
 	this.http.open('GET', url, true);
 	let self = this;
 	self.http.onload = function(){
 		if(self.http.status === 200){
 			callback(null,self.http.responseText);
 		}
 		else{
 			callback('Error:' + self.http.status);	
 		}
 	}
 	this.http.send();
 }

// post request 
 easyHttp.prototype.post = function(url,data,callback){
 	this.http.open('POST',url,true);
 	this.http.setRequestHeader('Content-type', ' ');
 	let self = this;
 	self.http.onload = function(){
 		callback(null,self.http.responseText);
 	}
 	this.http.send(JSON.stringify(data));
 }

 // put request 
 easyHttp.prototype.put = function(url,data,callback){
 	this.http.open('PUT',url,true);
 	this.http.setRequestHeader('Content-type', ' ');
 	let self = this;
 	self.http.onload = function(){
 		callback(null,self.http.responseText);
 	}
 	this.http.send(JSON.stringify(data));
 }

  easyHttp.prototype.delete = function (url, callback) {
 	this.http.open('DELETE', url, true);
 	let self = this;
 	self.http.onload = function(){
 		if(self.http.status === 200){
 			callback(null,'Post deleted');
 		}
 		else{
 			callback('Error:' + self.http.status);	
 		}
 	}
 	this.http.send();
 }
