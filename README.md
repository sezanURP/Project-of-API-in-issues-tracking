## 1️⃣ What is the difference between var, let, and const?
Answer: Difference between var, let, and const in below:

In JavaScript, var, let, and const are used to declare variables. However, they differ in terms of scope, redeclaration, and reassignment.

#### 1.var

Scope: Function-scoped

Redeclaration: Allowed

Reassignment: Allowed 

Variables declared with var are accessible throughout the entire function in which they are defined.

#### 2.let

Scope: Block-scoped

Redeclaration: Not allowed within the same scope

Reassignment: Allowed

let is commonly used when the value of a variable may change.

#### 3.const

Scope: Block-scoped

Redeclaration: Not allowed

Reassignment: Not allowed

const is used when the variable value should remain constant.



## 2️⃣ What is the spread operator (...)?

Answer: The spread operator (...) is used to expand elements of an array or properties of an object into another array or object.

It helps simplify tasks such as copying arrays, merging arrays, and cloning objects.

Such an example in array and object-

const arr1 = [1, 2, 3]; <br>
const arr2 = [...arr1, 4, 5];

console.log(arr2); <br>
The output:
[1, 2, 3, 4, 5]

In object-
const user = {
  name: "John",
  age: 25
};

const newUser = { ...user, country: "USA" };

The new variable will be-
newUser= {
   name:"John",
   age: 25,
   country:"USA'

 } 



## 3️⃣ What is the difference between map(), filter(), and forEach()?
Answer:In below described the difference between map(), filter(), and forEach():


There are array methods used to process elements of an array.


#### 1. map()

Used to transform each element of an array.
Returns a new array with modified values.

Example map() method:

const numbers = [1, 2, 3];
const result = numbers.map(n => n * 2);
Output:[2, 4, 6]


#### 2. filter()

It's used to select elements based on a condition.
Returns a new array containing only the elements that satisfy the condition.

Example filter() method:
const numbers = [1, 2, 3, 4];
const result = numbers.filter(n => n > 2);
Output is [3, 4]



 #### 3. forEach()

forEach() is used to iterate through an array.
Does not return a new array.

Example forEach() method:

const numbers = [1, 2, 3];
numbers.forEach(n => {
  console.log(n);
});

Its show the individual index of array in number or element 


## 4️⃣ What is an arrow function?
Answer: Arrow Function

An arrow function is a shorter syntax for writing functions in JavaScript. It update function in traditional functions introduced in ES6 (ECMAScript 2015).
Arrow functions make code more concise and readable.

Traditional function 
function add(a, b) {
  return a + b;
}

arrow function 
const add = `(a, b) => a + b;
const square = n => n * n`;

console.log(square(5));
output:25


## 5️⃣ What are template literals?
Answer:Template Literals:

Template literals are a feature in JavaScript used to create dynamic strings. They are written using backticks ( ) instead of single or double quotes.

They allow:

-String interpolation (embedding variables)
-Multiline strings

Example (String Interpolation)

const name = "John";
const age = 25;
const message =`My name is ${name} and I am ${age} years old.`;

Output: My name is John and I am 25 years old.


Example (Multiline String)-

const text = `
Hello
Welcome to JavaScript
Learning Template Literals
`;




