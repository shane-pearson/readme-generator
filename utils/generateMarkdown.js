// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  let apache = '';
  if (license === 'apache') {
    apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
    return apache;
  } else if (license === 'mit') {
    let mit = '';
    mit = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
    return mit;
  } else if (license === 'boost') {
    let boost = '';
   boost = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]';
    return boost;
  } else {
    let gnuGpl = '';
    gnuGpl  = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
    return gnuGpl;
  } 

} 

module.exports = renderLicenseBadge;


