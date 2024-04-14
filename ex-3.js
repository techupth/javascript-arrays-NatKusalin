// Start coding here
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

let alex = employees.find(employee => employee.name === "Alex");
alex.hobbies.push("Watching basketball");

console.log(employees[1]);
console.log(employees[1].hobbies);
