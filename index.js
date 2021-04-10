// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do we install your project?'
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'How should we use your project?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How should we test this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    
];

writeToFile();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    inquirer.prompt(questions)
    .then(answers => {
        // Template borrowed from github.com/othneildrew/Best-README-Template/
        
        let template = `        
<!-- TITLE -->
### <h1>${answers.title} README</h1>

<!-- TABLE OF CONTENTS -->
<details open="open">
    <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
    <ol>
    <li>
        <a href="#about-the-project">About The Project</a>
        <ul>
        <li><a href="#built-with">Built With</a></li>
        </ul>
    </li>
    <li>
        <a href="#getting-started">Getting Started</a>
        <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

${answers.description}



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.
${answers.test}

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
    \`\`\`sh
    npm install npm@latest -g
    \`\`\`

### Installation

1. Clone the repo
    \`\`\`sh
    git clone https://github.com/github_username/repo_name.git
    \`\`\`
2. Install NPM packages
    \`\`\`sh
    npm install
    \`\`\`



<!-- USAGE EXAMPLES -->
## Usage

${answers.instructions}





<!-- CONTRIBUTING -->
## Contributing

### Current Contributors: 
<ol>${answers.contributors}</ol>

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your Changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the Branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request



<!-- LICENSE -->
## License ${answers.license}

This project is licensed under the ${answers.license} license.


<!-- CONTACT -->
## Contact

<li><a href = ${answers.email}>Email</a></li>

<li><a href = https://github.com/${answers.github}>GitHub Profile</a></li>
`
        fs.writeFile(`${answers.title}-README.md`, template, (err) => 
            err ? console.error(err) : console.log('SUCCESS BIZnatch'))
    })
};

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();





