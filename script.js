fetch('books.json')
    .then(response => response.json())
    .then(books => {
        const bookGrid = document.querySelector('.book-grid');
        books.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.classList.add('book-item');
            bookItem.innerHTML = `
                <h3>${book.title}</h3>
                <p>By ${book.author}</p>
            `;
            bookGrid.appendChild(bookItem);
        });

        const searchInput = document.getElementById('search-input');
        searchInput.addEventListener('input', filterBooks);
 function filterBooks() {
            const searchTerm = searchInput.value.trim().toLowerCase();
            const bookItems = document.querySelectorAll('.book-item');
            bookItems.forEach(bookItem => {
                const bookTitle = bookItem.querySelector('h3').textContent.toLowerCase();
                const bookAuthor = bookItem.querySelector('p').textContent.toLowerCase().replace('by ', '');
                if (bookTitle.includes(searchTerm) || bookAuthor.includes(searchTerm)) {
                    bookItem.style.display = 'block';
 } else {
                    bookItem.style.display = 'none';
                }
            });
        }
    })
    .catch(error => console.error('Error:', error));
function showBooks(category) {
  const bookList = document.getElementById('book-list');
  bookList.innerHTML = '';

  // Sample book data
  const books = {
    fiction: [
      { Pride and Prejudice : 'Book 1',Jane Austen: 'Author 1' },
      { The Adventures of Tom Sawyer : 'Book 2', Mark Twain: 'Author 2' },
    ],
    'non-fiction': [
      { Sapiens: 'Book 3', Yuval Noah Harari : 'Author 3' },
      { The Diary of a Young Girl : 'Book 4', Anne Frank: 'Author 4' },
    ],
    biographies: [
      { The Autobiography of Malcolm X: 'Book 5', Malcolm X: 'Author 5' },
    ],
  };

  const selectedBooks = books[category];

  selectedBooks.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = <h3>${book.title}</h3><p>Author: ${book.author}</p>;
    bookList.appendChild(bookElement);
  });
}
