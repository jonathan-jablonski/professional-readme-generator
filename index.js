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
        let template = `[![Contributors][contributors-shield]][contributors-url]
        [![Forks][forks-shield]][forks-url]
        [![Stargazers][stars-shield]][stars-url]
        [![Issues][issues-shield]][issues-url]
        [![MIT License][license-shield]][license-url]
        [![LinkedIn][linkedin-shield]][linkedin-url]
        
<!-- TITLE -->
### <h1>${answers.title}</h1>

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
## License

${answers.license}


<!-- CONTACT -->
## Contact

Email - ${answers.email}

GitHub Profile - ${answers.github}



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/github_username
`
        fs.writeFile('README.md', template, (err) => 
            err ? console.error(err) : console.log('SUCCESS BIZnatch'))
    })
};

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();





