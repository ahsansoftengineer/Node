const yargs = require('yargs');
l = console.log;
l(yargs.argv);
l('Working Here');
yargs.version('1.0.0');
// There are several Ways of defining Command in Yargs
// 1. Array of Command
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
  .parse();
// 2. Command Chaining
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
  .parse();

// 3. Parsing All Command

yargs
  .command({
    command: 'A',
    describe: 'Add Node with all Parsing',
    handler: (argv) => {
      l('A Capital Notes');
    },
  })
  .parse();
yargs
  .command({
    command: 'U',
    describe: 'Update Node with all Parsing',
    handler: (argv) => {
      l('U Capital Notes');
    },
  })
  .parse();