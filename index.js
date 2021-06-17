// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
       type: 'input',
       message: 'What is the title of your project?',
       name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installInstruct',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'uInfo',
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are the test instructions',
        name: 'testInstruct',
    },
    {
        type: 'list',
        message: 'What is the license?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPLv2', 'GPLv3', 'Mozilla Public 2.0', 'Other'],
    },
    {
        type: 'input',
        message: 'Please provide your GitHub username.',
        name: 'userName',
    },
    {
        type: 'input',
        message: 'Please provide your email address',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : null
        );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
        const result = generateMarkdown(data);
        writeToFile('readmeGen.md', result)
    });
} 
// Function call to initialize app
init();
