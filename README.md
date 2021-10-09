## How to Create Array of Command?

## Important Points Regarding Yargs to Work
#### To Know Yargs to Work in your application
> * Log the Yargs in the Console
```javascript
  console.log(yargs.argv)
```
> * Parse the Yargs at the last of your application
```javascript
  yargs.parse()
```
> * Otherwise application will not work as aspected



> 1. Go to the following URL and download the Node
```javascript
const yargs = require('yargs');
l = console.log;
l(yargs.argv);
```
> #### There are several Ways of defining Command in Yargs
### 1. Array of Command
```javascript
yargs
  .command([
    {
      command: 'add',
      describe: 'Adding command',

      handler: (argv) => {
        l('Adding notes');
      },
    },
    {
      command: 'update',
      describe: 'Update command',
      handler: (argv) => {
        l('Update notes');
      },
    },
    {
      command: 'delete',
      describe: 'Deleting Node',
      handler: (argv) => {
        l('Delete Command Working');
      },
    },
    {
      command: 'get',
      describe: 'Get Node',
      handler: (argv) => {
        l('Get Command Working');
      },
    },
  ])
yargs.parse();
```
### 2. Command Chaining
```javascript
yargs
  .command({
    command: 'a',
    describe: 'Adding command',
    handler: (argv) => {
      l('A notes');
    },
  })
  .command({
    command: 'u',
    describe: 'Update command',
    handler: (argv) => {
      l('U notes');
    },
  })
  .command({
    command: 'd',
    describe: 'Deleting Node',
    handler: (argv) => {
      l('D Notes');
    },
  })
  .command({
    command: 'g',
    describe: 'Get Node',
    handler: (argv) => {
      l('G Notes');
    },
  })
yargs.parse();
```
### 3. Parsing All Command
```javascript
yargs
  .command({
    command: 'A',
    describe: 'Add Node with all Parsing',
    handler: (argv) => {
      l('A Capital Notes');
    },
  })
yargs
  .command({
    command: 'U',
    describe: 'Update Node with all Parsing',
    handler: (argv) => {
      l('U Capital Notes');
    },
  })
  yargs.parse();
```
### 4. Adding Parameters to Yargs
```javascript
yargs
  .command([
    {
      command: 'add',
      describe: 'Adding command',
      builder: {
        title: {
          describe: 'Note Title',
          demandOption: true,
          type:'string'
        },
        message: {
          describe: 'Note Message',
          demandOption: true,
          type: 'string'
        }
      },
      handler: (argv) => {
        // l(title + message);
        l('ADD Command')
        l(' Title :' + argv.title)
        l(' Message :' + argv.message)
      },
    },
    {
      command: 'update',
      describe: 'Update command',
      handler: (argv) => {
        l('Update notes');
      },
    },
    {
      command: 'delete',
      describe: 'Deleting Node',
      handler: (argv) => {
        l('Delete Command Working');
      },
    },
    {
      command: 'get',
      describe: 'Get Node',
      handler: (argv) => {
        l('Get Command Working');
      },
    },
  ])

// Required Code to Yargs work Correctly
// 1. Parsing
yargs.parse();
// 2. Print is Alternative of Parsing
l(yargs.argv)
```