// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
		type: 'input',
		name: 'title',
		message: 'What is the name of your Project?',
	},
	{
		type: 'input',
		message: 'Can you provide a description of your Project?',
		name: 'description',
	},
	{
		type: 'input',
		message: 'What are the steps required to install your project?',
		name: 'installation',
	},
	{
		type: 'input',
		message: 'Can you provide some usage information?',
		name: 'usage',
	},
	{
		type: 'input',
		message: 'Is there anybody that helped contribute to this project?  If so provide their name/github URL',
		name: 'contribution',
	},
  {
    type: 'input',
		message: 'What is your github username?',
		name: 'githubUser',
  },
  {
    type: 'input',
		message: 'What is your github URL?',
		name: 'githubURL',
  },
  {
    type: 'input',
		message: 'What is your email address?',
		name: 'email',
  }
];

// TODO: Create a function to write README file
function writePage(pageData) {
	fs.writeFile('README.md', pageData, (err) =>
		err ? console.error(err) : console.log('Success!')
	);
}
function htmlData(data) {
	const { title, description, installation, usage, contribution, githubUser, githubURL, email} = data;
    const structure = 
    `${title}
    ## Description
   ${description}
    ## Installation
    ${installation}
    ## Usage
   ${usage}
    ## Credits
    ${contribution}
    ## License
    The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
   
    ## Questions
    ${githubUser}
    ${githubURL}
    With additional questions you can reach me at ${email}
    
    ## Tests
    Go the extra mile and write tests for your application. Then provide examples on how to run them here.`

	writePage(structure);
}
// TODO: Create a function to initialize app
function askQuestions(questions) {
	inquirer.prompt(questions).then((data) => {
		htmlData(data);
	});
}

// Function call to initialize app
askQuestions(questions);
