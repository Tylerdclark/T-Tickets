#!/usr/bin/env node

/* 
"npm -g install ." at the project root to install it
"npm uninstall -g task-tracker" to uninstall
*/
const yargs = require("yargs");
const { addTicket, removeTicket, listTickets, readTicket } = require("./tickets.js");

// Add command
yargs.command({
    command: "add",
    describe: "Add a new ticket",
    builder: {
        title: {
            describe: "Ticket title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Ticket body",
            demandOption: true,
            type: "string"
        },
    },
    handler: argv => {
        // store the Ticket here.. using JSON
        addTicket(argv.title, argv.body);
    }
});

// remove command
yargs.command({
    command: "remove",
    describe: "Remove a ticket",
    builder: {
        title: {
            describe: "Ticket title",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        removeTicket(argv.title);
    }
});

// list command
yargs.command({
    command: "list",
    describe: "List the tickets",
    handler: () => {
        listTickets();
    }
});

// read command
yargs.command({
    command: "read",
    describe: "Read a ticket",
    builder: {
        title: {
            describe: "Ticket title",
            demandOption: true,
            type: "string"
        }
    },
    handler: argv => {
        readTicket(argv.title);
    }
});

yargs.parse();
