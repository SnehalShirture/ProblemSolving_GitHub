/*You are given an array:

var fruits = ['Apple', 'Banana', 'Orange'];

a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
b) Remove ‘Orange’ and add ‘Watermelon’*/

var fruits = ["Apple", "Banana", "Orange"];

// Find the index of banana
var bananaIndex = fruits.indexOf("Banana");
console.log(bananaIndex);

// Replace Banana with Mango

fruits[1] = "Mango";
console.log(fruits)


// Remove Orange and add Apple 

fruits.pop()
console.log(fruits)

fruits.push("Watermelon")
console.log(fruits)