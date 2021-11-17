const peopleSalary = [
  { name: "Petro", salary: 1000 },
  { name: "Pet", salary: 1001 },
  { name: "Petra", salary: 1002 },
  { name: "Petru", salary: 1003 },
  { name: "Petre", salary: 1004 },
  { name: "Petry", salary: 1005 },
];
const newPeopleSalary = peopleSalary
  .map((person) => {
    return person.salary;
  })
  .map((i) => (x += i), (x = 0))
  .reverse()[0];

console.log(newPeopleSalary);
