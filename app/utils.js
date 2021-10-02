// In Node every files has its own scope 
// Undermentioned properties and function cannot be accessible outside of the file
// So it can only be utlized in the same file
local_prop = 'Local Property'
myfunction = () => {
  console.log('Utils Function Called internally ' + local_prop);
}
myfunction();
// Create Property and function to expose outside of the file
const some_prop = 'Some Property will be Exposed'
const another_prop = 'Another Property will be Exposed'
newFunction = (param) => {
  console.warn('Exported Function ' + some_prop + param);
}
// Now Export the Function Property and funciton
module.exports = some_prop
module.exports = another_prop
// module.exports = newFunction()