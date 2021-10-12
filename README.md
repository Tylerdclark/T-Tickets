# T-Tickets

A simple NodeJS application I created to track my tasks in the form of tickets

## Installation

After cloning, in the root directory of the repo, give the command:

```bash
npm -g install .
```
## Usage

In general, the command:

```bash
node app.js
```

will be used to run the program with several commmands and flags. At any time use:

```bash
node app.js --help 
```
for the help menu.

|Command|Action|
|---|---|
|app.js add|Add a new ticket|
|app.js remove|Remove a ticket|
|app.js list|List the tickets|
|app.js read|Read a ticket|

for the ```add``` command, use the ```--title``` and ```--body``` flags to add title and body for the ticket. Remove requires the ```--title``` flag.
