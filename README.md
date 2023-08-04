# 11ty Simons starter pack
 Blank 11ty starter

## Setup
Create new repo on github with Github Desktop and set up folder for project.
Download zip from 11ty Simons stater pack and unpack files to project folder. There will be a duplicate of the .gitattirbutes file. Delete the duplicate.
OPen project folder in VS Code and cnrtl` to open terminal.

## Installation
**Run:** 
npm innit -y
npm install @11ty/eleventy@latest
npm install clean-css

**in package.json change:**
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
**to:**
"scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  },

**Run NPM atart eleventy --serve**