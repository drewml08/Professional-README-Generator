'use strict';

var fs = require('fs');

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
// Github Username 
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

inquirer.prompt(questions).then((response) => {
    var README = "";
    README += "# " + response.project_name + "\n";
    switch (response.license){
        case "Apache":
            README += "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) \n";
            break;

        case "Boost":
            README += "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt) \n";
            break;

        case "BSD-3":
            README += "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) \n";
            break;

        case "BSD-2":
            README += "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause) \n";
            break;

        case "CCO":
            README += "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/) \n";
            break;

        case "Eclipse":
            README += "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0) \n";
            break;   

        case "GPL3":
            README += "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) \n";
            break;

        case "GPL2":
            README += "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) \n";
            break;   
            
        case "LGPL3":
            README += "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0) \n";
            break;        

        case "IBM":
            README += "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0) \n";
            break;
            
        case "ISC":
            README += "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) \n";
            break;    

        case "MIT":
            README += "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n";
            break;  
            
        case "Mozilla":
            README += "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0 \n";
            break;       
            
        case "ODC BY":
            README += "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/) \n";
            break;  
            
        case "Perl":
            README += "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0) \n";
            break;
            
        case "SIL":
            README += "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1) \n";
            break;

        case "Unlicense":
            README += "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/) \n";
            break;

        case "WTFPL":
            README += "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/) \n";
            break;
                
            case "Zlib":
            README += "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)\n";    
            break;
    }
    README += "\n";
    README += "## Description \n";
    README += response.project_description + "\n";
    README += "\n";

    README += "## Table of Contents \n";
    README += "- [Installation](#installation) \n";
    README += "- [Usage](#usage) \n";
    README += "- [How to Contribute](#how-to-contribute) \n";
    README += "- [License](#license) \n";
    README += "- [Tests](#tests) \n";
    README += "\n";

    README += "## Installation \n"; 
    README += response.installation + "\n";
    README += "\n";

    README += "## Usage \n"; 
    README += response.usage + "\n";
    README += "\n";

    README += "## License \n"; 
    README += response.license + "\n";
    README += "\n";

    README += "## How to Contribute \n"; 
    README += response.contributing + "\n";
    README += "\n";
    
    README += "## Tests \n";
    README += response.tests + "\n";
    README += "\n";

    README += "## Questions \n";
    README += "If you have any comments or questions you can contact " + response.username + " at <" + response.email + "> \n";

    fs.writeFile('new-README.md', README, function (err) {
    if (err) throw err;
    console.log('Created new-README file!');
  });
});