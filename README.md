# Learn Node
## How to Save Javascript Object into JSON formate in File?
#### Importing File System Module from Global Node Module
```javascript
const fs = require('fs')
```
#### Converting Javascript Object into JSON
```javascript
const book = {
  title: 'Copy Name',
  author: 'Author'
}
const jsonData = JSON.stringify(book);
// Storing into File
fs.writeFileSync('my-json-file.json',jsonData);
```
#### Converting JSON into Javascript Object
```javascript
// 1. Reading JSON Data from File
const dataBuffer = fs.readFileSync('test-json.json');
// 2. Converting Buffer into JSON Data
const jsonData = dataBuffer.toString();
// 3. Convert JSON into JavaScript Object
const javaScriptObject = JSON.parse(jsonData);
// 4. Updating Data
javaScriptObject.name = 'Asim';
javaScriptObject.age = 29;
// 5. Convert Javascript Object into JSON
const newJsonData = JSON.stringify(javaScriptObject);
// 6. Writing JSON Data into File
fs.writeFileSync('test-b-json.json',newJsonData);
// 7. Logging Updated data into Console
console.log(newJsonData)
```