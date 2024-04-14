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
let alex = employees.find(employee => employee.name == "Alex").name;
let alexHobbies = employees.find(employee => employee.name == "Alex").hobbies;
let alexAndJamesAge = employees.find(employee => employee.name == "Alex").age + employees.find(employee => employee.name === "James").age;

console.log(alex);
console.log(alexHobbies);
console.log(alexAndJamesAge);
