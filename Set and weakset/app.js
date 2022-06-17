// Explore a new data structure which is set

// Array vs set

// Array literal
const arrLiteral = [5, 6];
const arrConstructor = new Array();

// Added data in array dataStructure
arrConstructor[0] = "Tusar";
arrConstructor[1] = "Rakib";

// Set constructor. Set can not have any literal syntax
const mySet = new Set();

// Add data in Set dataStructure
// mySet.add('Tusar');

// Chaining Add
mySet.add(1).add(2).add(3).add("Tusar");

// Delete element
mySet.delete("Tusar");

// Element available or not
// console.log(mySet.has('Tusar'));
// mySet.clear();
// console.log(mySet.keys());
// console.log(mySet.values());
// console.log(mySet.entries());

// Array to Set
// const numbers = [1, 2, 3, 4, 5];
// const numbersSet = new Set(numbers);
// console.log(numbersSet);

// Set to array
// const friends = new Set();
// friends.add('Rakib').add('Sharif').add('Selim').add('Shovon');
// const friendsArray = [...friends];
// console.log(friendsArray);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 5, 3, 4, 9];
// const filteredArray = new Set(numbers);
// console.log(...filteredArray);

const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

// const union = new Set([...a, ...b]);
// const intersection = new Set([...a].filter(x => b.has(x)));
const difference = new Set([...a].filter(x => !b.has(x))); 
console.log(difference);
