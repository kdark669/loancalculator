// making class 
class Book{
	constructor(title, author, isbn){
		this.title 		=	title;
		this.author 	=	author;
		this.isbn 		=	isbn;
	}
}

class UI{

	 addBookToList(book) {
	 	const list = document.getElementById('book-list');
	 	const row = document.createElement('tr');
	 	row.innerHTML = 
	 		`<td>${book.title}</td>
	 		 <td>${book.author}</td>
	 		 <td>${book.isbn}</td>
	 		 <td><a href="#" class="delete">X</a></td>
	 		`;
	 	list.appendChild(row);
	 
	 } 

	 clearfields(){
	 	document.getElementById('title').value ='';
	 	document.getElementById('author').value ='';
	 	document.getElementById('isbn').value ='';
	 }

	 showAlert(message, className){

	 	const errordiv = document.createElement('div');
	 	errordiv.className = `alert ${className}`;
	 	errordiv.appendChild(document.createTextNode(message));
	 	
	 	const container = document.querySelector('.container');
	 	const form = document.querySelector('#book-form');
	 	container.insertBefore(errordiv, form);
	 	setTimeout(function(){
	 		document.querySelector('.alert').remove();
	 	},3000);
	 }

	 deleteBook(target){
	 	
	 	if(confirm("Are you sure to delete?")){
	 		if(target.className === 'delete'){
	 			target.parentElement.parentElement.remove();
	 		}
	 	}
	 }

}

// local storage static class
class Store{
	static getBook(){
		let books;
		if(localStorage.getItem('books') === null){
			books = [];
		}
		else{
			books = JSON.parse(localStorage.getItem('books'));
		}
		return books;
	}
	static displayBook(){
		const books = Store.getBook();
		books.forEach(function(book){
			const ui = new UI();

			// add book to list
			ui.addBookToList(book);
		});
	}
	static addBook(book){
		const books = Store.getBook();
		books.push(book);
		localStorage.setItem('books', JSON.stringify(books));
	}
	static removeBook(isbn){
		const books = Store.getBook();
		books.forEach(function(book,index){
			if(book.isbn === isbn){
				books.splice(index, 1);
			}
		});

		localStorage.setItem('books', JSON.stringify(books));

	}

}

// DOM LOad Event to display book from ls
document.addEventListener('DOMContentLoaded',Store.displayBook);

// form eventlistner to get input data from form
document.getElementById('book-form').addEventListener('submit', function (e) {
	// geting value from input field
	const 	title 	= document.getElementById('title').value,
			author	= document.getElementById('author').value,
			isbn 	= document.getElementById('isbn').value
	
	// instantiating class
	const book = new Book(title, author, isbn);
	const ui   = new UI();

	if(title === '' || author === '' || isbn === ''){
		ui.showAlert('Please fill in all fields', 'error');
	}
	else{
		ui.addBookToList(book);
		// add to ls
		Store.addBook(book);
		ui.clearfields();
		ui.showAlert('Book Added !!','success');
	}

	e.preventDefault();

});

// delete eventlistner to delete from table 
document.getElementById('book-list').addEventListener('click', function(e){
	const ui = new UI();
	ui.deleteBook(e.target);
	// remove from ls
	Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
	ui.showAlert('Book removed!', 'success');
	e.preventDefault();
});