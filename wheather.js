const request = require('request')
const postman_request = require('postman-request')
const wheather = require('./hidden/access_key')
 
// Example of NPM package Request
// API WHEATHER STACK
// request({url: wheather.new_york_weather, json: true}, (error, response, body) => {
//   console.warn('REQUEST');
//   console.log('ERROR :', error); 
//   console.log('STATUS CODE :', response && response.statusCode); 
//   // Request is not converting JSON into javascript object
//   // const data  = JSON.parse(body)
//   // console.log('BODY:', data.current);
//   console.log('BODY:', body.current);

// }) 

// Example of NPM package Postman Request
postman_request({url: wheather.new_york_weather, json: true}, (error, response, body) => {
  console.log('================================ WHEATHER FILE IS RUNNING ================================')
  // Error, Response, Body are Javascript Object
  // But Inside them The data is in the form of JSON
  console.warn('POSTMAN REQUEST');
  console.log('ERROR :', error); 
  console.log('STATUS CODE:', response && response.statusCode); 
  // postman is converting JSON into javascript object
  // const data  = JSON.parse(body)
  // console.log('BODY:', data.current);
  console.log(body.current);
}) 
// No Need to Export Because function are being called self
// module.exports = {
//   postman_request,
//   request
// }