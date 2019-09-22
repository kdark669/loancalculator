// selector - single element
console.log(document.getElementById('task-title').id);

const taskTitle = document.getElementById('task-title');

taskTitle.style.background = 'black'; 
taskTitle.style.color = 'white'; 
taskTitle.innerHTML = '<span>My Task  </span>'

console.log(document.querySelector('#task-title').style.background= 'red');
console.log(document.querySelector('.card-title'));
	console.log(document.querySelector('h5'));

	document.querySelector('li:last-child').style.color = "blue";
	document.querySelector('li:nth-child(3)').style.color = "yellow ";

	
	// selector - multiple element
	// const items = document.getElementsByClassName('collection-item');

console.log(items);

items[3].textContent = "Hello "

// const listItems  = document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems);
// listItems.style.color = 'red'
// 
const list = document.getElementsByTagName('li');

// console.log(list[0] );

lis = Array.from(list);

lis.forEach(function(li, index){
	// console.log(li.className);
	li.textContent = `${index}:Hello`;
});

console.log(lis);

// queryselector
const item = document.querySelectorAll('ul.collection li.collection-item');

const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach(function(li, index){
	li.style.background = 'purple';
	li.textContent = 'foo '
});

// document.querySelectorAll('li:nth-child(even)').forEach(function(li, index){
// 	li.style.color = 'pink';
// 	li.textContent = 'bar '
// });

const liEven = document.querySelectorAll('li:nth-child(even)');
for(let i =0 ;i<liEven.length;i++){
	let j = liEven[i]
	j.style.background = 'pink';
	j.textContent = 'bar';
}

console.log(item); 

// using querySelector
// let val;

const list = document.querySelector('ul.collection');
const listItems =document.querySelector('li.collection-item:first-child');

val = listItems; //parent is ul 
val = list; //parent is div

// get child nodeType

val = list.childNodes;
val = list.childNodes[5].nodeName;
val = list.childNodes[1].nodeType;
// val = list.children;
// 
val = list.children[3].children[0].id = 'hello buddy';

val = list.childElementCount;

// get parent node 

val = listItems.parentNode;
// parent of parent

 val = listItems.parentElement.parentElement

 // get next nextSibling
 val = listItems.nextSibling;
 val = listItems.nextElementSibling;
