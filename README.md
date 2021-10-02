## How to Use Node to execute a javascript file
> * *node fileName.js*
## Files and folder Utilized
> * *app.js*
> * *utils.js*
> * *note.txt*
## How to use global Node Modules for Create and Update File?
> 1. To Use Global Modules we first need to import it in our js file
```javascript
const fs = require('fs');
fs.writeFileSync('note.txt', 'Initial Content in the file\n');
console.log('File has created');
fs.appendFileSync('note.txt', 'Appended Content in the File\n');
console.log('File has updated');
```
#### Extra Information 

## Link
> 1. Go to the following URL and download the Node
> 2. Link .[NODE] (https://nodejs.org/en/download/)
> 3. Follow the on screen instruction to install

## Commands
> *command **-v***
