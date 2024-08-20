

function fetchBooks() {
  // تنفيذ طلب fetch للـ API
  return fetch('https://anapioficeandfire.com/api/books')
    .then((response) => response.json()) // تحويل الاستجابة إلى JSON
    .then((books) => renderBooks(books)); // تمرير البيانات إلى الدالة renderBooks
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach((book) => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});
