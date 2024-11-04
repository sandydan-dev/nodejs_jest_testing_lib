const {
  getAllEmployees,
  getAllEmployeeById,
  addNewEmployees,
} = require("../controller/employee.controller");

// describe employees testing

describe("employees function ", () => {
  // get all employees
  it("should return all employees", async () => {
    const employeeData = [
      { id: 1, name: "John Doe", position: "Software Engineer" },
      { id: 2, name: "Jane Smith", position: "Product Manager" },
      { id: 3, name: "Sam Johnson", position: "Designer" },
      { id: 4, name: "Lisa Brown", position: "DevOps Engineer" },
    ];

    let employee = getAllEmployees();
    expect(employee.length).toBe(4);
    expect(employee).toEqual(employeeData);
  });

  // employee by id
  it("should return employee by id", async () => {
    let employeeData = {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
    };

    const employee = getAllEmployeeById(1);
    expect(employee).toEqual(employeeData);
  });

  // employee id if not found showing undefined
  it("should return undefined, if id not found", () => {
    const employee = getAllEmployeeById(12345);
    expect(employee).toBeUndefined();
  });

  it("should return  new employee", () => {
    const newEmployee = {
      id: 5,
      name: "John Doe",
      position: "Software Engineer",
    };
    const employee = addNewEmployees(newEmployee);
    expect(employee).toEqual(newEmployee);

    let allEmployees = getAllEmployees();
    expect(allEmployees.length).toBe(5);
  });
});
