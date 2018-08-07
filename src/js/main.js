// DOM VARIABLES
const timeLoader = 2000; // 2 secs
const loader = document.getElementById('loader');
const bodyContent = document.getElementById('body-content');

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.body.style.backgroundColor = 'white';
    loader.style.display = 'none';
    bodyContent.style.display = 'block';
  }, timeLoader);
});
