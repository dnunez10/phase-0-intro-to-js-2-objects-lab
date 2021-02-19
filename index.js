// Write your solution in this file!
var employee = {};
function updateEmployeeWithKeyAndValue(employee, key, value){
  return Employee.assign({}, employee, {[key]: value});
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
}
var employee = {name:1}
destructivelyUpdateEmployeeWithKeyAndValue(employee, 'name2', 2);
employee;
function deleteFromEmployeeByKey(employee, key){
  delete employee.key;
  return employee;
}
var employee = {name:1}
let newEmployee = deleteFromEmployeeByKey(employee, 'object');
employee;
  var newEmployee = employee.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
function destructivelyDeleteFromEmployeeByKey(employee, key){
  var newEmployee = delete employee.key;
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
}