const yargs = require('yargs')
const notes = require('./notes.js')
const l = console.log
yargs.command(
  [
  {
    command: 'add',
    describe: 'Adding command',
    builder: {
      title: {
        describe: 'Note Title',
        demandOption: true,
        type:'string'
      },
      body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      notes.addNotes(argv.title, argv.body)
      l('Added Notes => Title : ' + argv.title + ' Body : ' + argv.body)
    }
  },
  {
    command: 'get',
    describe: 'Get All Notes / Get Specific Note',
    builder: {
      search: {
        describe: 'Note Body',
        demandOption: false,
        type: 'string'
      }
    },
    handler: (argv) => {
      l(notes.getNotes(argv.search))
    }
  },
  {
    command: 'update',
    describe: 'Update Note command',
    builder: {
      title: {
        describe: 'Note Title',
        demandOption: true,
        type:'string'
      },
      body: {
        describe: 'Note Body',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      notes.updateNotes(argv.title, argv.body)
    }
  },
  {
    command: 'delete',
    describe: 'Deleting a Note command',
    builder: {
      title: {
        describe: 'Note Title',
        demandOption: true,
        type:'string'
      }
    },
    handler: (argv) => {
      notes.deleteNotes(argv.title, argv.body)
    }
  },
])
yargs.parse();