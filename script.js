/ 1. Select form and submit button elements
const submitBtn = document.getElementById('submit');
const bookList = document.getElementById('book-list');
// 2. Handle form submission
submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form from reloading the page
    // Get input values
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();

    // Ensure fields are not empty
    if (title === '' || author === '' || isbn === '') {
        return;
    }

    // 3. Create a new table row
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">X</button></td>
    `;
    // 4. Append row to table body
    bookList.appendChild(row);
    // 5. Clear input fields
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
});
// 6. Delete book row on clicking the clear/delete button
bookList.addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});