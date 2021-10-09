const yargs = require('yargs')
l = console.log
// Customizing Yargs Version
yargs.version('1.0.0')
l(yargs.argv)