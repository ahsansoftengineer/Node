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
  printGuestList(){
    console.log('Guest List for ' + this.name)
  }
}
```