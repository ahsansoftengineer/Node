## How to Use node flags in application?
* *node app.js -c -u -d x*
* Utilizing Flags in Application
```javascript
l = console.log;
l('Application Started');
command = process.argv;
l(command)
command.forEach((cmd) => {
  if (
    cmd === command[0] || cmd === 'D:\\2 Node\\Node\\app.js') l('skipped options');
  else {
    switch (cmd) {
      case '-a':
      case 'add':
      case '-c':
      case 'create':
        l('ADD / CREATE');
        break;
      case '-u':
      case 'update':
      case '-m':
      case 'modified':
        l('UPDATE / MODIFIED');
        break;
      case '-d':
      case 'del':
      case 'delete':
        l('DEL / DELETE');
        break;
      case '-g':
      case 'get':
        l('GET');
        break;
      case '-ga':
      case 'getAll':
        l('GET ALL');
        break;
      default:
        l('Option not defined');
        break;
    }
  }
});

```

## What is yargs?
* Yargs helps you build interactive command line tools by parsing arguments and generating an elegant user interface. Yargs gives you: commands and (grouped) options (like module run -n --force), ... bash-completion shortcuts for commands and options, and much more.
* Yargs module is used for creating your own command-line commands in node. js and helps in generating an elegant user interface. This module makes command-line arguments flexible and easy to use.
## How to install Yargs?
* <span style="color:blue">*npm i yargs* </span>
* 
