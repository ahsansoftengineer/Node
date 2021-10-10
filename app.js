const request = require('request')
const postman_request = require('postman-request')
const wheather = require('./hidden/access_key')
 
// Example of NPM package Request
request({url: wheather.new_york_weather}, (error, response, body) => {
  console.warn('REQUEST');
  console.log('ERROR :', error); 
  console.log('STATUS CODE :', response && response.statusCode); 
  // Request is not converting JSON into javascript object
  const data  = JSON.parse(body)
  console.log('BODY:', data.current);
}) 

// Example of NPM package Postman Request
postman_request({url: wheather.new_york_weather}, (error, response, body) => {
  // Error, Response, Body are Javascript Object
  // But Inside them The data is in the form of JSON
  console.warn('POSTMAN REQUEST');
  console.log('ERROR :', error); 
  console.log('STATUS CODE:', response && response.statusCode); 
  // postman is converting JSON into javascript object
  const data  = JSON.parse(body)
  console.log('BODY:', data.current);
  // console.log(body);
}) 