const yargs = require('yargs')
l = console.log
command = process.argv
l('Result of Node')
l(command)
l('Result of Yargs')
l(yargs.argv)
l('Title Printed by using Yargs')
l(yargs.argv.title)
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


