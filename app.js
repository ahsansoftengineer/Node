const yargs = require('yargs');
// import yargs from 'yargs'
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

  // This is Always Needs to Call If you want Yargs to Pint on the Console
  yargs.parse();
  // This is the Alternative of Parsing
  l(yargs.argv)
