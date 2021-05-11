const chalk = require('chalk')
const { argv } = require('yargs')
const notes = require('./notes.js')
const yargs = require("yargs")

//create add command
yargs.command({
    command: "add",
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        notes.addNote(argv.title, argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note ',
    builder: {
        title:{
            describe: "note title",
            demandOption: true,
            type : 'string'
        }
    },
    handler: function () {
        console.log('Listing out all the notes')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read your notes ',
    handler: function () {
        console.log('Read out all the notes')
    }
})

yargs.parse()

