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

