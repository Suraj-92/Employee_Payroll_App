// const stingyfyDate = (date) => {
//   const option = { day: 'numeric', month: 'short', year: 'numeric' };
//   const newDate = !date ? "undefined" : new Date(Date.parse(date)).toLocaleDateString("en-GB", option);
//   return newDate;
// }
// const date = "1 November 2020";
// const DateFormater = function(date){
//   console.log(date);
//   return new Date(date);
// }
// var options = {year: 'numeric', month: 'short', day: 'numeric' };
// console.log(DateFormater(date).toLocaleString('en-GB', options))

// const update = (node) => {
//   let empPayrollData = empPayrollList.find(empData => empData._id == node.id)
//   if (!empPayrollData) return;
//   localStorage.setItem('editEmp', JSON.stringify(empPayrollData))
//   window.location.replace(site_properties.add_emp_payroll_page);
// }
const date = `1 November 2020`;
const stringifyDate = (date) => {
  console.log(date);
  const option = { day: "numeric", month: "short", year: "numeric" };
  return new Date(Date.parse(date)).toLocaleDateString("en-GB", option);
};