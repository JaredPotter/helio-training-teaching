// CALLBACKS

// What is a Callback?
// Code executed at a later time after something finishes.
// Asynchronous in JavaScript

console.log('Hello');

setTimeout(function() {
    console.log('There, ');
}, 2500);

console.log('Helio');

// ---OUTPUT---
// Hello
// Helio
// There, 