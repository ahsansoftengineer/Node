// Mapbox is an American provider of custom online maps for websites and applications such as Foursquare, Lonely Planet, the Financial Times, The Weather Channel, Instacart Inc. and Snapchat.
const postman_request = require('postman-request')
const geo = require('./hidden/access_key')

// Error, Response, Body are Javascript Object
// But Inside them The data is in the form of JSON
postman_request({url: geo.geo_los_angles, json: true}, (error, response, body) => {
  console.log('================================ GEO FILE IS RUNNING ================================')
  console.warn('POSTMAN REQUEST');
  console.log('ERROR :', error); 
  console.log('STATUS CODE:', response && response.statusCode); 
  // const data  = JSON.parse(body)
  // console.log('BODY:', data.current);
  console.log(body);
}) 