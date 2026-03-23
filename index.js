const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your full name?',
    validate: (value) => value.trim() !== '' || 'Please enter your name.'
  },
  {
    type: 'input',
    name: 'profession',
    message: 'What is your current profession or title?',
    validate: (value) => value.trim() !== '' || 'Please enter your profession or title.'
  },
  {
    type: 'input',
    name: 'location',
    message: 'What city and state are you in?',
    validate: (value) => value.trim() !== '' || 'Please enter your location.'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    validate: (value) => /.+@.+\..+/.test(value.trim()) || 'Please enter a valid email address.'
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Write a short professional bio:',
    validate: (value) => value.trim() !== '' || 'Please enter a short bio.'
  },
  {
    type: 'input',
    name: 'skills',
    message: 'Enter your top skills separated by commas:',
    filter: (value) => value.split(',').map((skill) => skill.trim()).filter(Boolean)
  },
  {
    type: 'input',
    name: 'projects',
    message: 'Enter 3 projects separated by commas:',
    filter: (value) => value.split(',').map((project) => project.trim()).filter(Boolean)
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'What is your LinkedIn URL?',
    validate: (value) => value.trim() !== '' || 'Please enter your LinkedIn URL.'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub URL?',
    validate: (value) => value.trim() !== '' || 'Please enter your GitHub URL.'
  }
];

async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const html = generateHTML(answers);
    const outputPath = path.join(__dirname, 'portfolio.html');

    fs.writeFileSync(outputPath, html, 'utf8');
    console.log(`\nSuccess! Your portfolio page was created at: ${outputPath}`);
  } catch (error) {
    console.error('There was a problem generating the portfolio page:', error);
  }
}

init();
