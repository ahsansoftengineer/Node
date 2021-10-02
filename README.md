## What are the Node Builtien Modules
> * **assert** | *Provides a set of assertion tests*
> * **buffer** | *To handle binary data*
> * **child_process** | *To run a child process*
> * **cluster** | *To split a single Node process into multiple processes*
> * **crypto** | *To handle OpenSSL cryptographic functions*
> * **dgram** | *Provides implementation of UDP datagram sockets*
> * **dns** | *To do DNS lookups and name resolution functions*
> * **domain** | *Deprecated. To handle unhandled errors*
> * **events** | *To handle events*
> * **fs** | *To handle the file system*
> * **http** | *To make Node.js act as an HTTP server*
> * **https** | *To make Node.js act as an HTTPS server.*
> * **net** | *To create servers and clients*
> * **os** | *Provides information about the operation system*
> * **path** | *To handle file paths*
> * **punycode** | *Deprecated. A character encoding scheme*
> * **querystring** | *To handle URL query strings*
> * **readline** | *To handle readable streams one line at the time*
> * **stream** | *To handle streaming data*
> * **string_decoder** | *To decode buffer objects into strings*
> * **timers** | *To execute a function after a given number of milliseconds*
> * **tls** | *To implement TLS and SSL protocols*
> * **tty** | *Provides classes used by a text terminal*
> * **url** | *To parse URL strings*
> * **util** | *To access utility functions*
> * **v8** | *To access information about V8 (the JavaScript engine)*
> * **vm** | *To compile JavaScript code in a virtual machine*
> * **zlib** | *To compress or decompress files*
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

## How to use Other JS Files in JS file?
> * In Node every files has its own scope 
> * Cannot shared functions in other file with out exporting
> * So it can only be utlized in the same file
> * Function Doesn't needs tobe export
### 1. Utils File
```javascript
local_prop = 'Local Property'
myfunction();
// Create Property and function to expose outside of the file
const some_prop = 'Some Property will be Exposed'
newFunction = (param) => {
  console.warn('Exported Function ' + some_prop + param);
}
// Now Export the Function Property and funciton
module.exports = some_prop
module.exports = another_prop
```
### 2. App File
> * Importing and Utilizing Imported file property and function
> * Ref var of file is required for Porperties
> * Function Doesn't Requred variable of file
```javascript
const sp = require('./utils.js')
// Utils Property
console.log('app Using some_prop ' + sp)
// Utils Funciton
newFunction('App Passing Parameter')
```