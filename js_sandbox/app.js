// // log to console
// console.log('Hello world');
// var greeting = "Namaste";
// console.log(greeting);

// // log arrays
// console.log([1,2,3,4]);
// // log object
// console.log({a:1,b:2});
// console.table({a:1,b:2});


// // error
// console.error("something is wrong");

// // to clear consle
// // console.clear();

// console.time("hello")
// console.log('hello world');
// console.timeEnd('hello')

// es 2015 or es6

// declaring variable

// var name = "Rajeev Rajchal"
// console.log(name);

// // reassiging the name varibale
// name = 'javascript'
// console.log(name);

// // init var

// var greeting;
// console.log(greeting);
// 


// using let 
// let name;
// name = 'Rajeev Rajchal'
// console.log(name);
// name = 'Steev';
// console.log(name);


// const: cannot be reasign

// creating array objets 

// const person = {
// 	name:'john',
// 	age:'30',

// }

// console.log(person);
// console.log(person.age);
// console.log(person['name']);
// 


// const name = "Rajeev";
// const surname = "Rajeev";
// const age = 21;
// const city = "Bhaktapur";
// let html;
// // with es6 way 
// html = `
// 		<ul>
// 			<li>Name: ${name}</li>
// 			<li>Surname: ${surname}</li>
// 			<li>City: ${age}</li>
			
		
// 		</ul>
// 		`;

// document.body.innerHtml = html
// 

// const person = new Date();
// console.log(person);
//
// const object = {
// 	name:'john',
// 	number: 9860116323,
// }
// for( i=1 ; i<10 ;i++){
// var fullname = object.name;
// console.log(fullname);
// }

// Es 6 class
class Car{
	constructor(name, speed){
		this.name = name;
		this.speed = speed;
	}
	engine(){
		console.log(this.name + `${this.speed}`);
	}
}
let ferrari = new Car('ferrari458gtb','100km/sec');
ferrari.engine();