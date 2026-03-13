1️⃣ What is the difference between var, let, and const?
Answer: Difference between var, let, and const in below:

In JavaScript, var, let, and const are used to declare variables. However, they differ in terms of scope, redeclaration, and reassignment.

1. var

Scope: Function-scoped

Redeclaration: Allowed

Reassignment: Allowed

Variables declared with var are accessible throughout the entire function in which they are defined.

2. let

Scope: Block-scoped

Redeclaration: Not allowed within the same scope

Reassignment: Allowed

let is commonly used when the value of a variable may change.

3. const

Scope: Block-scoped

Redeclaration: Not allowed

Reassignment: Not allowed

const is used when the variable value should remain constant.



2️⃣ What is the spread operator (...)?

Answer: The spread operator (...) is used to expand elements of an array or properties of an object into another array or object.

It helps simplify tasks such as copying arrays, merging arrays, and cloning objects.

Such an example in array and object-

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2);
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



3️⃣ What is the difference between map(), filter(), and forEach()?
Answer:
4️⃣ What is an arrow function?
5️⃣ What are template literals?
