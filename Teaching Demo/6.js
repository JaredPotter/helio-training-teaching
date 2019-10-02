// Callback - Event Listener

console.log('Hello');
console.log('There, ');

const button = document.querySelector('.my-button');
button.addEventListener('click', function() {
    console.log('Helio!');
});

// ---OUTPUT---
// Hello
// There, 
// Helio!