# 11ty Simons starter pack
 Blank 11ty starter

## Installation
**Clone repository and run:** 
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