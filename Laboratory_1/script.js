console.log("hello");

const status = document.getElementById('status');

document.getElementById('searchBtn').addEventListener('click', () => {
    const value = document.getElementById('searchInput').value;
    console.log('Search clicked. Query:', value);
    status.textContent = value ? `Searching for "${value}"...` : 'Type something to search.';
});

document.getElementById('clickBtn').addEventListener('click', () => {
    console.log('Click Me button pressed');
    status.textContent = 'You clicked "Click Me".';
});

document.getElementById('submitBtn').addEventListener('click', () => {
    console.log('Submit button pressed');
    status.textContent = 'Form submitted (not really, this is a demo).';
});

document.getElementById('resetBtn').addEventListener('click', () => {
    console.log('Reset button pressed');
    document.getElementById('searchInput').value = '';
    status.textContent = 'Reset.';
});
