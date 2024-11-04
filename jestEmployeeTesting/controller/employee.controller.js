const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "Product Manager" },
  { id: 3, name: "Sam Johnson", position: "Designer" },
  { id: 4, name: "Lisa Brown", position: "DevOps Engineer" },
];

// get employees list
function getAllEmployees() {
  return employees;
}

//  get employee by id
function getAllEmployeeById(id) {
  return employees.find((employee) => employee.id === id);
}

// add new employee
function addNewEmployees(employee) {
  let newEmployeeList = { id: employees.length + 1, ...employee };
  employees.push(newEmployeeList);
  return newEmployeeList;
}

module.exports = { getAllEmployees, getAllEmployeeById, addNewEmployees };
