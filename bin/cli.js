#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// In a real-world scenario, we would require('fs-extra'),
// but we will use the built-in fs module for this environment.
const fse = require('fs-extra');

const args = process.argv.slice(2);
const command = args[0] || 'help';

switch (command) {
  case 'create':
    createProject();
    break;
  case 'serve':
    serveProject();
    break;
  case 'build':
    buildProject();
    break;
  case 'help':
  default:
    showHelp();
    break;
}

function createProject() {
  const templatePath = path.join(__dirname, '..', 'src', 'index.html');
  const destinationPath = path.join(process.cwd(), 'index.html');

  if (fs.existsSync(destinationPath)) {
    console.error('Error: An index.html file already exists in this directory.');
    return;
  }

  fs.copyFileSync(templatePath, destinationPath);
  console.log('Success! Created a new index.html file.');
}

function serveProject() {
  const projectDir = process.cwd();
  console.log(`Starting development server for ${projectDir}...`);
  console.log('You can view your project at http://localhost:8080');

  // We use npx to ensure http-server is available.
  // In a real package, this would be a direct dependency.
  const serverProcess = exec(`npx http-server ${projectDir} -o`);

  serverProcess.stdout.on('data', (data) => {
    console.log(data);
  });
  serverProcess.stderr.on('data', (data) => {
    console.error(data);
  });
}

function buildProject() {
  const sourcePath = path.join(__dirname, '..', 'src');
  const destinationPath = path.join(process.cwd(), 'dist');

  console.log('Building project...');

  if (fs.existsSync(destinationPath)) {
    console.log('Cleaning old build directory...');
    fse.removeSync(destinationPath);
  }

  fse.copy(sourcePath, destinationPath, err => {
    if (err) {
      console.error('Error: Could not build the project.');
      console.error(err);
      return;
    }
    console.log('Success! Project built to /dist directory.');
  });
}

function showHelp() {
  console.log(`
JQCdN CLI Tool - v1.0.0

Usage:
  jqcdn <command>

Commands:
  create    Creates a new sample index.html file in the current directory.
  serve     Starts a local development server for the current directory.
  build     Builds the project, copying all necessary files into a /dist directory.
  help      Shows this help message.
  `);
}
