// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';

  } else {
    return `![${license} License](https://img.shields.io/badge/license-${license}-orange)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';

  } else {
    return `[License](#license)\n`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';

  } else {
    return `## License\n Licensed under ${data.license}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description\n
  ${data.description}\n

  ## Table of Contents\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * [Contribution](#contribution)\n
  * [Tests](#tests)\n
  * ${renderLicenseLink(data.license)}\n
  * [Questions](#questions)\n
  
  ## Installation\n
  ${data.installInstruct}\n

  ## Usage\n
  ${data.uInfo}\n

  ## Contribution\n
  ${data.guidelines}\n

  ## Tests\n
  ${data.testInstruct}\n
  ${renderLicenseBadge(data.license)}

  ## Questions\n
  https://github.com/${data.userName}\n
    - Reach me at ${data.email}\n
`;
}

module.exports = generateMarkdown;
