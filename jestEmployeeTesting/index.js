const express = require("express");
const app = express();
const port = 3000;

const {
  getAllEmployees,
  getAllEmployeeById,
  addNewEmployees,
} = require("./controller/employee.controller");

app.use(express.json());

// get all employees
app.get("/employees", (req, res) => {
  let response = getAllEmployees();
  res.status(200).json(response);
});

// get movies by id
app.get("/employees/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let response = getAllEmployeeById(id);
  res.status(200).json(response);
});

// add new employees
app.post("/employees/new", (req, res) => {
  let employee = req.body;
  let response = addNewEmployees(employee);
  res.status(201).json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
