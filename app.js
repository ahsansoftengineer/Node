const fs = require('fs')
l = console.log;
// const book = {
//   title: 'Copy Name',
//   author: 'Author'
// }
// const jsonData = JSON.stringify(book);
// fs.writeFileSync('my-json-file.json',jsonData);
const dataBuffer = fs.readFileSync('test-json.json');
const jsonData = dataBuffer.toString();
const javaScriptObject = JSON.parse(jsonData);
javaScriptObject.name = 'Asim';
javaScriptObject.age = 29;
const newJsonData = JSON.stringify(javaScriptObject);
fs.writeFileSync('test-b-json.json',newJsonData);
l(newJsonData)
 