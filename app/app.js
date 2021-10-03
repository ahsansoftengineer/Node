const validator = require('validator')
// import validator from 'validator'
let email = 'abc@gmail.com'
let url = 'http://google.com'
console.log('email : ' + validator.isEmail(email));
console.log('url : ' + validator.isURL(url));

