## How to Install npm in Project?
#### After Hiting the following
* *npm init*
#### NPM will ask the following question
1. package name: (node) my_project_name
2. version: (1.0.0)
3. description: For Learning Nodejs
4. entry point: (index.js)
5. test command:
6. git repository:[My Repository](https://github.com/ahsansoftengineer/Node.git)
7. keywords:
8. author: Muhammad Ahsan
9. license: (ISC)
10. About to write to D:\2 Node\Node\package.json:
#### Then it will provide the confimation
11. Is this OK? (yes) **yes**
#### Then it will create the following file in your folder
* package.json

## How to create node-modules in as per package.json
> * Curently we didn't have any dependencies install in our project
> * So we don't have node_modules 
#### To install is case sensitive there are many dependencies availaible with same name but different alphabatical case (Validator / validator)
## To Install any dependency use **npm install** command
> * Following Command will create node module folder and install all dependencies for validator in it.
> * Create package-lock.json where the dependencies exsist on the internet
* *npm i validator*
* *npm i chalk*
## How to use Node validator?
* node-validator is a simple, extensible object property validator for node.js. NEW Check out my second generation validator better-validator. It gives more options around usage and formatting as well as typescript support. It includes direct support for express.
* There are two ways of Importing Validator
> * Before ES6 *const validator = require('validator')* 
> * After ES6 *import validator from 'validator'*
* To Validate Something use the following syntax
```javascript
const validator = require('validator')
import validator from 'validator'
let email = 'abc@gmail.com'
let url = 'http://google.com'
console.log('email : ' + validator.isEmail(email));
console.log('url : ' + validator.isURL(url));
```
## How to use Node chalk?
* chalk is a library that provides a simple and easy to use interface for applying ANSI colors and styles to your command-line output. 
* You can chain the FrontColor and BackGround Color easily the order doesn't matter
```javascript
const chalk =  require('chalk')
log = console.log
// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.rgb(123, 45, 67).bgBlackBright.bold.italic('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));
```
