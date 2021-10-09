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
// Reading JSON Data from File
const dataBuffer = fs.readFileSync('test-json.json');
const jsonData = dataBuffer.toString();
const javaScriptObject = JSON.parse(jsonData);
javaScriptObject.name = 'Asim';
javaScriptObject.age = 29;
const newJsonData = JSON.stringify(javaScriptObject);
fs.writeFileSync('test-b-json.json',newJsonData);
l(newJsonData)
```