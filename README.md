# Arrow Function

> There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
> It’s called “arrow functions”, because it looks like this

`let func = (arg1, arg2, ..., argN) => expression;`

> Arrow functions can be used in the same way as Function Expressions.
> For instance, to dynamically create a function:

````let age =  prompt("What is your age?",  18);
let welcome =  (age <  18)  ?
	()  =>  alert('Hello!')  :
	()  =>  alert("Greetings!");
welcome();
````
> ES5 Function Object complexity
````const javascript = {
  name: 'JavaScript',
  libraries: ['React', 'Angular', 'Vue'],
  printLibraries: function() {
    let self = this;
    this.libraries.forEach(function (a) {
      console.log(self);
      console.log(`${self.name} loves ${a}`)
    });
  }
}
````

> ES6 Arrow function Object Solution
````const javascript = {
  name: 'JavaScript',
  libraries: ['React', 'Angular', 'Vue'],
  printLibraries: function () {
    console.log(this);
    this.libraries.forEach(library => {
      console.log(`${this.name} Loves ${library}`);
    })
  }
}

javascript.printLibraries();
````

---

# Explore Array

> Simple Array Example:
> `const fruits = ["Apple", "Orange", "Plum"];`

## Get last elements with “at”
> A recent addition
> This is a recent addition to the language. Old browsers may need polyfills.

- Let’s say we want a last element of the array.
- Some programming languages allow to use negative indexes for the same purpose, like `fruits[-1]`.
- Although, in JavaScript it won’t work. The result will be `undefined`, because the index in square brackets is treated literally.
- We can explicitly calculate the last element index and then access it: `fruits[fruits.length - 1]`.


# Explore Array Method

## `CopyWithin(target, start, end)`

> Some features of `copyWithin()` method

- target is required
- start defaults to 0
- end defaults to array.length
- never changes array.length
- overwrites original array
- returns modified array