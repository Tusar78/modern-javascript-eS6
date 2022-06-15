// Rewrite with arrow function

// ES5 Function
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// Arrow Function
/*
const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  (yes = () => alert("You agreed.")),
  (no = () => alert("You canceled the execution"))
);
*/

// ES5 Function Object complexity
// const javascript = {
//   name: 'JavaScript',
//   libraries: ['React', 'Angular', 'Vue'],
//   printLibraries: function() {
//     let self = this;
//     this.libraries.forEach(function (a) {
//       console.log(self);
//       console.log(`${self.name} loves ${a}`)
//     });
//   }
// }

// javascript.printLibraries()


// ES6 Arrow function Object Solution
// const javascript = {
//   name: 'JavaScript',
//   libraries: ['React', 'Angular', 'Vue'],
//   printLibraries: function () {
//     console.log(this);
//     this.libraries.forEach(library => {
//       console.log(`${this.name} Loves ${library}`);
//     })
//   }
// }

// javascript.printLibraries();

const search = document.querySelector('.search');
const display = document.querySelector('.display');
const thanks = document.querySelector('.thanks');

function show () {
  display.innerText = this.value;

  setTimeout(function () {
    thanks.innerHTML = `You have typed: ${this.value}`;
  }, 1000)
}

search.addEventListener('keyup', show);