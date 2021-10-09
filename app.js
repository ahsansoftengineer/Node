l = console.log;
// 1. javascript function
// const square = function(x){
//   return x * x
// }
// 2.  Arrow Function
// const square = (x) => {
//   return x * x
// }
// 3. Arrow Function without body
// const square = (x) => x * x
// 4. Object with Arrow Function doesn't support 'this' keyword
// Arrow Function does not support this
// const event = {
//   name: 'Brithday Party',
//   printGuestList: () => {
//     console.log('Guest List for ' + this.name)
//   }
// }
// 4. Object with Javascript Function does suppor 'this' keyword
// const event = {
//   name: 'Brithday Party',
//   printGuestList: function(){
//     console.log('Guest List for ' + this.name)
//   }
// }
// 5. ES6 Function has access to 'this' keyword
const event = {
  name: 'Brithday Party',
  printGuestList(){
    console.log('Guest List for ' + this.name)
  }
}
event.printGuestList()