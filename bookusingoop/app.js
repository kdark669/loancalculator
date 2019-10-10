// creating constuctor 
// book constuctor handel the actual book object
// book constructor

function Book (title, author, isbn) {
	this.title 		=	title;
	this.author 	=	author;
	this.isbn 		=	isbn;
}


// ui constructor handel the 
// actual operation of book 
// like adding books to list  show alert etc 

function UI () {
	// creating protype inorder to acces the function outside the constructor
	UI.prototype.addBookToList = function(book){
		const list = document.getElementById('book-list');
		// creating element of row tr
		const row = document.createElement('tr');
		// insert the cols in tr
		row.innerHTML = 
			`	<td>${book.title}</td>
				<td>${book.author}</td>
				<td>${book.isbn}</td>
				<td><a href="#" class="delete">X</a></td>
			`;
		//we have to append the row somewhere so  
		list.appendChild(row);

	}
	
	// clear field
	UI.prototype.clearfields = function (){
		document.getElementById('title').value = '';
		document.getElementById('author').value = '';
		document.getElementById('isbn').value = '';
	}
	// showalert 
	UI.prototype.showAlert = function (message, className){
		// create div
		const div = document.createElement('div');
		div.className = `alert ${className}`;
		div.appendChild(document.createTextNode(message));
		// get parent
		const container = document.querySelector('.container');
		const form = document.querySelector('#book-form');
		container.insertBefore(div, form);

		// disaper after 3 sec
		setTimeout(function(){
				document.querySelector('.alert').remove();
		},3000 );
	}	
	// delete book
	UI.prototype.deleteBook = function(target){
		if(confirm("Are you Sure to delete the book?")){
				if(target.className === 'delete'){
					target.parentElement.parentElement.remove();
					// a ko td ko tr
				}
		}
		
	}

}


// eventlistners  for add book
document.getElementById('book-form').addEventListener('submit',function(e){
	
	// getting form value
	const title  = document.getElementById('title').value,
		  author = document.getElementById('author').value,
		  isbn   = document.getElementById('title').value
	
	// instantiate to the class/constructor(book)
	const book = new Book(title, author, isbn);

	// instantiate UI Object
	const ui = new UI();
	// for validation
	if(title === '' || author ==='' || isbn === ''){
			ui.showAlert('Please fill in all fields', 'error');
			// UI.showAlert('msg', 'classname');
	}	
	else{
			// add book to ui, created the 
			// function name addBookToList to add the book ie object of BoOk constructor;
			ui.addBookToList(book);

			ui.clearfields();
			ui.showAlert('Book added !!','success');
		}

	

	e.preventDefault();
});

// event Lister for delete  book
document.getElementById('book-list').addEventListener('click',function(e){
	const ui = new UI();
	ui.deleteBook(e.target);
	ui.showAlert('Book removed !!','success');
	e.preventDefault();
});



