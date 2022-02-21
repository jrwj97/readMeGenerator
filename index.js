const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: "input",
      name: "githubName",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is your user email?",
    },
    {
      type: "input",
      name: "projectTitle",
      message:"What is the name of your project?",
    },
    {
      type: "input",
      name: "projectDescription",
      message:"Give a description of your project.",
    },
    {
      type: "input",
      name: "projectInstall",
      message:"What are the directions to install you project?",
    },
    {
      type: "checkbox",
      name: "projectPrograms",
      message:"What programs did you use to create your project?",
      choices: ["HTML", "JavaScript", "CSS"]
    },
    {
      type: "input",
      name: "projectContributors",
      message:"Who are the authors of your project?",
    },
    {
      type: "input",
      name: "projectGuide",
      message: "Give a tutorial on how to use your project",
    }
  ])
  .then(answers => console.log(answers));
// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();