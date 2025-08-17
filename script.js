fetch('books.json')
.then(response => response.json())
.then(books => {
  const bookGrid = document.querySelector('.book-grid');
  books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.classlist.add('book-item');
    bookItem.innerHTML
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', filterBook);

function filterBooks(){
  const searchTerm = searchInput.value.trim().toLowerCase();
  const bookItems = documents.querySelectorAll('.book-item');
  bookItems.forEach(bookItem =>{
    const bookTitle = bookItem.queryselector('h3').textContent.toLowerCase();
    const bookAuthor = bookItem.queryselector('p').textContent.toLowerCase().replace('by ','')
    if(bookTitle.includes(searchTerm)||bookAuthor.includes(searchTerm)){
      bookItem.style.display = 'block';
    }else{
      bookItem.style.display='none';
    });
}
      
