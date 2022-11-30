const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({Title, Description, Installation, Usage, Github,Email,License}) =>
  `
  [![License](https://img.shields.io/badge/License-${License}-blue.svg)](https://choosealicense.com/licenses/${License}/)
  <${Title}>

## Description

- ${Description}


## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)

## Installation

${Installation}

## Usage

${Usage}

## Github
My Github profile is (https://Github.com/${Github})

##Contact Me
I can be contacted at Email: ${Email}
## License
 The project is licensed with ${License}, details can be found at (https://choosealicense.com/licenses/${License}/)

  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the Project Title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is the Description of the Project?',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'How to Install the application?',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Describe the Usage:',
      },

    {
      type: 'input',
      name: 'Github',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your Email?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Which License this projetc is assigned for?',
        choices:['mit','gpl-3.0','isc'],
      },
    
    
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created read.me!')
    );
  });
