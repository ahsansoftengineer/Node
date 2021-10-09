## What are the ways of Creating Function in JavaScript and their advantages?
#### 1. javascript function
```javascript
const square = function(x){
  return x * x
}
```
#### 2.  Arrow Function
```javascript
const square = (x) => {
  return x * x
}
```
#### 3. Arrow Function without body
```javascript
const square = (x) => x * x
```
#### 4. Arrow Function within Objects doesn't support 'this' keyword
```javascript
const event = {
  name: 'Brithday Party',
  printGuestList: () => {
    console.log('Guest List for ' + this.name)
  }
}
```
#### 5. Javascript Function within Objects does support 'this' keyword
```javascript
const event = {
  name: 'Brithday Party',
  printGuestList: function(){
    console.log('Guest List for ' + this.name)
  }
}
```
#### 6. ES6 Function within Objects also support 'this' keyword
##### ES6 Function are handy in writting
```javascript
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
```
#### Sometime Arrow Function is Recommended Sometime Not
##### Arrow Function *directly in the Object* doesn't support 'this' keyword
##### Arrow Function in *forEach* does support 'this' keyword
