// Function to show books based on the year clicked with animation
function showBooks(year) {
    const books2019 = document.getElementById('2019-books');
    const books2018 = document.getElementById('2018-books');

    // Reset animations and hide sections
    books2019.classList.remove('active');
    books2018.classList.remove('active');

    if (year === '2019') {
        books2019.style.display = 'block';
        books2018.style.display = 'none';
        setTimeout(() => {
            books2019.classList.add('active');
        }, 100);
    } else if (year === '2018') {
        books2018.style.display = 'block';
        books2019.style.display = 'none';
        setTimeout(() => {
            books2018.classList.add('active');
        }, 100);
    }
}
