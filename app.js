const yargs = require('yargs')
l = console.log
command = process.argv
l('Result of Node')
l(command)
l('Result of Yargs')
l(yargs.argv)
l('Title Printed by using Yargs')
l(yargs.argv.title)
yargs.command({
  command: 'add',
  description: 'Adding New Note',
  handler: function(){
    console.log("A New Note Added to List")
  }
})


