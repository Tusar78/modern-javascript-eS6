// Explore a new data structure which is set

// Array vs set

// Array literal 
const arrLiteral = [5, 6];
const arrConstructor = new Array();

// Added data in array dataStructure
arrConstructor[0] = 'Tusar';
arrConstructor[1] = 'Rakib';


// Set constructor. Set can not have any literal syntax
const mySet = new Set();

// Add data in Set dataStructure
// mySet.add('Tusar');

// Chaining Add
mySet.add(1).add(2).add(3).add('Tusar');
console.log(mySet);