const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
let alicia = {
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novels"],
};

let kody = {
  name: "Kody",
  age: 19,
  hobbies: ["Computer games", "Wakeboard"],
};

employees.push(alicia, kody);

console.log(employees[0]);
console.log(employees[1]);
console.log(employees[2]);
console.log(employees[3]);
console.log(employees.length);