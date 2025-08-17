fetch('books.json')
.then(response => response.json())
.then(books => {
  const bookGrid = document.querySelector('.book-grid');
  books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.classlist.add('book-item');
    bookItem.innerHTML
