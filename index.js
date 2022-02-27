const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require(`./utils/generateMarkdown.js`);

const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "githubName",
      message: "What is your GitHub username?",
      validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter your GitHub username!');
            return false; 
        }
      }
    },
    {
      type: "input",
      name: "userEmail",
      message: "What is your user email?",
      validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter your email address!');
            return false; 
        }
      }
    },
    {
      type: "input",
      name: "projectTitle",
      message:"What is the name of your project?",
      validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter the name of your project!');
            return false; 
        }
      }
    },
    {
      type: "input",
      name: "projectDescription",
      message:"Give a description of your project.",
      validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please give a description of your project!');
            return false; 
        }
      }
    },
    {
      type: "input",
      name: "projectInstall",
      message:"What are the directions to install you project?",
      validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please provide instructions on how to install your project!');
            return false; 
        }
      }
    },
    {
      type: "checkbox",
      name: "projectPrograms",
      message:"What programs did you use to create your project?",
      choices: ["HTML", "JavaScript", "CSS"],
      validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Select all programs that apply!');
            return false; 
        }
      }
    },
    {
      type: "input",
      name: "projectContributors",
      message:"Who are the authors of your project?",
      validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please enter who contributed to this project!');
            return false; 
        }
      }
    },
    {
      type: "input",
      name: "projectGuide",
      message: "Give a tutorial on how to use your project",
      validate: input => {
        if (input) {
            return true;
        } else {
            console.log('Please give a tutorial on how to use your project!');
            return false; 
        }
      }
    },
    {
      type: "checkbox",
      name: "projectLicense",
      message: "What license shoul dyour project have?",
      choices: ["MIT", "GNU"],
      default: ["MIT"],
    }
  ])
}

const writeFile = data => {
  fs.writeFile("README.md(1)", data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your README has been created succesfully as README.md(1)!")
    }
  })
};

questions()
.then(answers => {
  return generateMarkdown(answers);
})
.then (data => {
  return writeFile(data);
})
.catch(err => {
  console.log(err)
})