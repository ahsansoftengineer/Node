// Node Module
const fs = require('fs') 
// NPM Module
const yargs = require('yargs');
const chalk = require('chalk');
const validator = require('validator');
// Local Module
const notes = require('./notes.js') 
// Personnel Settings
const l = console.log
error = chalk.white.bgRed.bold('ERROR ');
errMsg = chalk.red.italic;
success = chalk.white.bgGreen.bold('SUCCESS ');
sucMsg = chalk.green.italic;
validator.validate('');
yargs.command([
  {
    command: 'add',
    describe: 'Adding Note'

  }
])
yargs.parse()