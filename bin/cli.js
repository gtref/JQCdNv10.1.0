#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

if (command === 'create') {
  createProject();
} else {
  showHelp();
}

function createProject() {
  const templatePath = path.join(__dirname, '..', 'src', 'index.html');
  const destinationPath = path.join(process.cwd(), 'index.html');

  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error: Could not read the template file.');
      console.error(err);
      process.exit(1);
    }

    if (fs.existsSync(destinationPath)) {
      console.error('Error: An index.html file already exists in this directory.');
      console.error('Please move or delete the existing file and try again.');
      process.exit(1);
    }

    fs.writeFile(destinationPath, data, 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('Error: Could not write the new index.html file.');
        console.error(writeErr);
        process.exit(1);
      }
      console.log('Success! Created a new index.html file in the current directory.');
      console.log('You can now open it in your browser to see the sample application.');
    });
  });
}

function showHelp() {
  console.log(`
JQCdN CLI Tool - v1.0.0

Usage:
  jqcdn <command>

Commands:
  create    Creates a new sample index.html file in the current directory.
  help      Shows this help message.
  `);
}
