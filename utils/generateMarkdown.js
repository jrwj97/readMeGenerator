const generateMarkdown = data => {
  return `# ${data.projectTitle}
  ![Github License](http://img.shields.io/badge/license-${data.projectLicense}-blue.svg)

  ## Description
  ${data.projectDescription}
  ## Table of Contents
  * [Installation](#installation)
  * [Guide](#guide)
  * [License](*license)
  * [Contributors](#contributors)
  * [Questions](#questions)

  ## Installation
  ${data.projectInstall}

  ## Guide
  ${data.projectGuide}

  ## License
  This project is licensed under ${data.projectLicense}

  ## Contributors
  ${data.projectContributors}

  ## Questions
  If you have any questions about this project, reach out to me at ${data.userEmail}. You can view my other projects at https://github.com/${data.githubName}
`;
}

module.exports = generateMarkdown;