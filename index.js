const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({title, description, installation, usage, github,email}) =>
  `
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
My Github profile is https://github.com/${github}

##Contact Me
I can be contacted at email: ${email}
## License

[https://choosealicense.com/](https://choosealicense.com/).
[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)
[https://choosealicense.com/licenses/gpl-3.0/](https://choosealicense.com/licenses/gpl-3.0/)

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
    
    
  ])
  .then((answers) => {
    const readmePageContent = generateREADME(answers);

    fs.writeFile('README.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created read.me!')
    );
  });
