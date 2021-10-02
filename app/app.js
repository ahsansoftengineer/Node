// Importing Node Modules
let fs = require('fs');
// Ref var of file is required for Porperties
// Function Doesn't Requred variable of file
const sp = require('./utils.js')


fs.writeFileSync('note.txt', 'This is my Content that is going to written in the file');
console.log('File has created');
fs.appendFileSync('note.txt', '\nThis content is added at the below of the file');
console.log('File has updated');

// Importing Local Files
console.log('app Using some_prop ' + sp)
console.log('app calling newFunction ')
newFunction('App Passing Parameter')