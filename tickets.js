const fs = require("fs");
const chalk = require("chalk");

// TODO: Add ticket priority
// TODO: Be able to sort
// TODO: Add time to the ticket
// TODO: Give time info on tickets
// TODO: Assign profiles
// TODO: Create config file


/**
 * Loads the tickets using the loadTickets function and searches for duplicates 
 * before either adding the ticket or reminding the ticket exists
 * 
 * @param {String} title Name the thing
 * @param {String} body Body for the thing
 */
const addTicket = (title, body) => {
    const tickets = loadTickets();
    const duplicate = tickets.find(ticket => ticket.title === title);

    if (!duplicate) {
        tickets.push({
            title: title,
            body: body
        });
        saveTickets(tickets);
        console.log(chalk.green("New ticket added!"));
    } else {
        console.log(chalk.red("Note title exists!"));
    }
};

/**
 * Takes the parsed JSON object and saves it to a file named "tickets.json" in the 
 * current directory.
 * 
 * @param {JSON} tickets the JSON object to save
 */
const saveTickets = (tickets) => {
    const dataJSON = JSON.stringify(tickets);
    fs.writeFileSync("tickets.json", dataJSON);
};

/**
 * Synchronously reads the contents of "./tickets.json" and returns the JSON 
 * object contained.
 * 
 * @throws error if issue with creating databuffer
 * @returns {JSON} JSON data
 */
const loadTickets = () => {
    try {
        const dataBuffer = fs.readFileSync("tickets.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

    } catch (error) {
        console.error("Issue with reading notes.json")
        return [];
    }
};

/**
 * Removes a note from the loaded JSON list before overwriting the saved JSON 
 * which was loaded with loadNotes()
 * @param {String} title to note to be removed, if found
 */
const removeTicket = (title) => {
    const tickets = loadTickets();
    const found = tickets.find(ticket => 
        ticket.title === title
    );
    if (found) {
        tickets.splice(tickets.indexOf(found), 1);
        saveTickets(tickets);
        console.log(chalk.green(`Successfully deleted "${title}"`));
    } else {
        console.log(chalk.red("That note was not present!"));
    }
};

/**
 * Loads the tickets and dumps them to console log
 */
const listTickets = () => {
    const tickets = loadTickets();
    console.log(chalk.gray("Your tickets:"));
    tickets.forEach(ticket => {
        console.log(ticket.title);
    });
};

/**
 * Looks for the ticket of the given title and then provides the ticket details 
 * if provided.
 * 
 * @param {*} title of the ticket to be read
 */
const readTicket = (title) => {
    const tickets = loadTickets();
    const found = tickets.find(ticket =>
        ticket.title === title
    );
    if (found) {
        console.log(found.body);
    } else {
        console.log(chalk.red("That ticket was not present!"));
    }
};

exports.addTicket = addTicket;
exports.removeTicket = removeTicket;
exports.listTickets = listTickets;
exports.readTicket = readTicket;