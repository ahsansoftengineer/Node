## What is nodemon?
* nodemon is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected. ... To use nodemon , replace the word node on the command line when executing your script.
## How to install nodemon?
* Install nodemon globally because it is a development tool
> * <span style="color='blue'"> *npm i nodemon -g* <span>
> * <span style="color='blue'"> *nodemon -v* <span>
> * <span style="color='blue'"> *nodemon app/chalk_test.js* <span>
## How to use nodemon to restart the application when detect changes?
> 1. To Use Global Modules we first need to import it in our js file
```javascript
console.log('Run it with nodemon command');
// Now Run the following Command
console.log('nodemon app.js');
// After Running the above command make the following changes and save
console.log('This is some changes to detect');
```