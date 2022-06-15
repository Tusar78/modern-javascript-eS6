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
const ask = (question, yes, no) => {
  confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  (yes = () => alert("You agreed.")),
  (no = () => alert("You canceled the execution"))
);
