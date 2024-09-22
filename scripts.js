// Function to show books based on the year clicked with animation
function showBooks(year) {
    const books2020 = document.getElementById('2020-books');
    const books2019 = document.getElementById('2019-books');
    const books2018 = document.getElementById('2018-books');

    // Reset animations and hide sections
    books2020.classList.remove('active');
    books2019.classList.remove('active');
    books2018.classList.remove('active');

    // Hide all sections first
    books2020.style.display = 'none';
    books2019.style.display = 'none';
    books2018.style.display = 'none';

    // Show and animate the correct section based on the clicked year
    if (year === '2020') {
        books2020.style.display = 'block';
        setTimeout(() => {
            books2020.classList.add('active');
        }, 100);
    } else if (year === '2019') {
        books2019.style.display = 'block';
        setTimeout(() => {
            books2019.classList.add('active');
        }, 100);
    } else if (year === '2018') {
        books2018.style.display = 'block';
        setTimeout(() => {
            books2018.classList.add('active');
        }, 100);
    }
}
