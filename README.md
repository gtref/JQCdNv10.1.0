# JQCdN CLI

A simple command-line tool to scaffold a sample project using the JQCdN browser library.

## Installation

To install the JQCdN CLI, you need to have Node.js and npm installed. Then, you can install the package globally from npm (once it's published):

```bash
npm install -g jqcdn
```

Alternatively, you can clone this repository and link it locally for development:
```bash
git clone https://github.com/gtref/JQCdNv10.1.0.git
cd JQCdNv10.1.0
npm link
```

## Usage

The primary command is `create`. This command will generate a sample `index.html` file in your current directory. This HTML file is pre-configured to use the JQCdN browser library and CSS from a CDN.

To use it, simply run:
```bash
jqcdn create
```

This will create an `index.html` file with a sample to-do list application. You can open this file in your browser to see the JQCdN library in action.

### Commands

-   `jqcdn create`: Creates the sample `index.html` file.
-   `jqcdn help` (or any other command): Displays the help message.

---

*Note: The JQCdN browser library and CSS files are still available in the `src` directory of this package.*