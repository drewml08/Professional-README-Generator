'use strict';

const inquirer = require('inquirer');

const questions = [
// Project title
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'project_name', 
},
// Description
{
    type: 'input',
    message: 'Please describe your project',
    name: 'project_description',
},

// Installation
{   
    type: 'input',
    message: 'Please enter installation instructions',
    name: 'installation',
},    
// Usage
{
    type: 'input',
    message: 'Please enter usage information',
    name: 'usage',
},
// License
{
    type: 'list',
    message: 'What type of license to use for project?',
    choices: ['Apache', 'Boost','BSD-3', 'BSD-2', 'CCO','Eclipse', 'GPL3', 'GPL2','LGPL3', 'IBM', 'ISC', 'MIT', 'Mozilla', 'ODC BY', 'Perl', 'SIL', 'Unlicense', 'WTFPL', 'Zlib'],
    name: 'license',
},
// Contributing
{   
    type: 'input',
    message: 'What are the contribution guidelines?',
    name: 'contributing',
},
// Tests
{
    type: 'input',
    message: 'What are the testing instructions?',
    name: 'tests',
},
// Gitub Username 
{
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
},
// Email Address 
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},
];

inquirer.prompt(questions).then((response) =>
    console.log(response)
);