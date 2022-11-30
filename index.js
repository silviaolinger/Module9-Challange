const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, installation, usage, github,email,license}) =>
  `
  [![License](https://img.shields.io/badge/${license}.0-blue.svg)](https://choosealicense.com/licenses/${license}/)
  <${title}>

## description

- ${description}


## Table of Contents

- [installation](#installation)
- [usage](#usage)
- [License](#license)

## installation

${installation}

## usage

${usage}

## Github
My Github profile is (https://github.com/${github})

##Contact Me
I can be contacted at email: ${email}
## License
 The project is licensed with ${license}, details can be found at (https://choosealicense.com/licenses/${license}/)

  `;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the Project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'What is the description of the Project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How to Install the application?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage:',
      },

    {
      type: 'input',
      name: 'github',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
    {
        type: 'list',
        name: 'license',
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
