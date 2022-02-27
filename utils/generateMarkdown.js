const generateMarkdown = data => {
  return `# ${data.title}
  ![Github License](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description
  ${data.description}
  ## Table of Contents
  *[Installation](#installation)
  *[Usage](#usage)
  *[License](*license)
  *[Contributors](#contributors)
  *[Tests](#tests)
  *[Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any qyestions about this project, reach out to me at ${data.email}. You can view my other projects at ${data.github}
  `;
}

module.exports = generateMarkdown;