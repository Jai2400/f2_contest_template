/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = employees.filter(employee => employee.profession === "developer");
  const developerNames = developers.map(developer => developer.name);
  console.log(developerNames);
}

function PrintDeveloperbyForEach() {
const developers = [];
  employees.forEach(employee => {
    if (employee.profession === "developer") {
      developers.push(employee);
    }
  });
  console.log(developers);
}
function addData() {
  const newEmployee = {id:4, name:"susan", age:"20", profession:"intern"};
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
   const updatedEmployees = employees.filter(employee => employee.profession !== "admin");
  console.log(updatedEmployees);
}
function concatenateArray() {
    const newEmployees = [
    {id:4, name:"lisa", age:"22", profession:"manager"},
    {id:5, name:"mike", age:"25", profession:"developer"},
    {id:6, name:"tom", age:"23", profession:"designer"}
  ];
  const concatenatedArray = employees.concat(newEmployees);
  console.log(concatenatedArray);
}
