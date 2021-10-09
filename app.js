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
  guests: ['Ahsan', 'Asim', 'Mobin', 'Yousuf', 'Ibrahim'],
  printGuestList(){
    console.log('Guest List for ' + this.name)
    // This doesn't work here
    // To Fix this issue we use external parameter
    that = this
    this.guests.forEach(function (guest){
      console.log(guest + ' this.name ' + this.name + ' that.name ' + that.name );
    })
    console.log('============= Comparasion ===============');
    // 'this' keyword problem could be solved using Arrow Function
    this.guests.forEach((guest) => {
      console.log(guest + ' this.name ' + this.name + ' that.name doesn\'t required');
    })
    console.log('Invited Guests');
  }
}
event.printGuestList()