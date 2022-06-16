const info = {
  name: "JavaScript",
  company: "Netscape",
  owner: "Brendan Eich",
  // engine: {
  //   name: [
  //     "V8-Engine - Chrome",
  //     "Spider Manky - Mozilla",
  //     "Chakra - microsoft-edge",
  //   ],
  // },
};

// const { owner } = info;
// const { owner : founderOfJS } = info;
// const { name } = info.engine;
// const { engine : { name } } = info;
// const { engine : { name : engineName} } = info;

// If data is not available as property name
// const { engine: { name: engineName } = {} } = info;
// console.log(engineName);

// Now we can explore array destructuring
// const numbers = [1, 2, [3, 100, 500], 4, 5];
// const [a, b] = numbers;

// I need specific number from an array
// const [, a, , , b] = numbers;
// const [, , [, , a], , b] = numbers;
// console.log(a, b);


// Old way swapping 
// let a = 10;
// let b = 20;
// console.log(a, b);
// let temp;
// temp = b;
// a = temp;
// b = a;
// console.log(a, b);

// New way swapping using array destructuring
let a = 10;
let b = 20;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b);