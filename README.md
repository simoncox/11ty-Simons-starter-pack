# 11ty Simons starter pack
 Blank 11ty starter

## Setup
This is a template so you can create new repo on github by clicking the green button 'Use this template'.
Open the project folder in your code app (Visual Studio Code for me where I can press Ctrl` to open terminal for the next bit).

## Installation
**Run:** 
npm innit -y
npm install @11ty/eleventy@latest
npm install clean-css

**in package.json change:**
<code>"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },</code>
**to:**
<code>"scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  },</code>

**Run NPM atart eleventy --serve**

Start building out the new project!

CSS is in the _includes folder as site.css and the clean-css package minifies this and adds it as inline css in the head of the html files for sheer page load speed.
