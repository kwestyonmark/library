let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function render() {
    let library = document.querySelector('#library');
    library.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i]
        let bookElement = document.createElement('div');
        bookElement.setAttribute('class', 'book-card');
        bookElement.innerHTML = `
        <div class ='card-header'>
            <h3 class = 'title'>${book.title}</h3>
            <h5 class = 'author'>by: ${book.author}</h5>
        </div>
        <div class ='card-body'>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not Read Yet'}</p>
            <button type='checkbox'class='toggle-btn' onclick = 'toggleRead(${i})'>Read</button>
            <button class='remove-btn' onclick = 'removeBook(${i})'>Remove</button>
        </div>
        `
        library.appendChild(bookElement)
    }
};

function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
};

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;

    let newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook)
    render();
};


let addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', function() {
    let form = document.querySelector('#form');
    form.style = 'display: block;'
});

document.querySelector('#form').addEventListener('submit', function (event) {
    event.preventDefault();
    addBookToLibrary();
    let form = document.querySelector('#form');
    form.style = 'display: none;'
})