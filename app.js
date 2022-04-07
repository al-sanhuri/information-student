const yargs = require('yargs')


const notes = require('./notes')
// add
yargs.command({
    command: 'add',
    describe: 'Add note',
    builder: {
        id: {
            describe: 'This is Id description in add command',
            type: 'number',
            demandOption: true
        },
        name: {
            describe: 'This is name description in add command',
            demandOption: true,
            type: 'string'
        },
        degree: {
            describe: 'This is degree description in add command',
            demandOption: true,
            type: 'array'
        },
        comment: {
            describe: 'This is comment description in add command',
            type: 'string'
        }
    },
    handler: (x) => {
        notes.addNote(x.id, x.name, x.degree, x.comment)
    }
})

// delete
yargs.command({
    command: 'delete',
    describe: 'Delete note',
    builder: {
        id: {
            describe: 'This is body description in delete command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (x) => {
        notes.removeNote(x.id)
    }
})

// read 
yargs.command({
    command: 'read',
    describe: 'Read note',
    builder: {
        id: {
            describe: 'This is body description in read command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (x) => {
        notes.readNote(x.id)
    }
})
// list 

yargs.command({
    command: 'list',
    describe: 'List noteeeeeeee',
    handler: () => {
        notes.listNote()
    }
})

yargs.parse()
