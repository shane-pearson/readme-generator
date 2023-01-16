// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const renderLicenseBadge = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
    inquirer.prompt([
    {
        type: 'input',
        message: 'Describe your project',
        name: 'description',
        validate: (value) => { if (value){return true} else {'please describe your project'}},
    },
    {
        type: 'input',
        message: 'Table of Contents',
        name: 'contents',
        validate: (value) => { if (value){return true} else {'please insert your table of contents'}},
    },
    {
        type: 'input',
        message: 'Add Installation',
        name: 'installation',
        validate: (value) => { if (value){return true} else {'please add installation'}},
    },
    {
        type: 'input',
        message: 'Add usage',
        name: 'usage',
        validate: (value) => { if (value){return true} else {'please add usage'}},
    },
    {
        type: 'list',
        message: 'Please pick a License',
        name: 'license',
        choices: ['apache', 'mit', 'boost', 'gnuGpl'],
    },
    {
        type: 'input',
        message: 'Add contributions',
        name: 'contributing',
        validate: (value) => { if (value){return true} else {'please add contributing'}},
    },
    {
        type: 'input',
        message: 'Add tests',
        name: 'test',
        validate: (value) => { if (value){return true} else {'please add test'}},
    },
    {
        type: 'input',
        message: 'Any questions?',
        name: 'questions',
        validate: (value) => { if (value){return true} else {'please add a question.'}},
    },
    {
        type: 'input',
        message: 'Whats your git hub profile?',
        name: 'git',
        validate: (value) => { if (value){return true} else {'please add your github.'}},
    }
])
.then(({
    description,
    contents,
    installation,
    usage,
    license,
    contributing,
    test,
    questions,
    git
    
})=>{
  
const markDown =`# description  
    ${description}
    ${renderLicenseBadge(license)}
    ## Table of Contents:
    ### * [description](#description)
    ### * [installation](#installation)
    ### * [usage](#usage)
    ### * [license](#license)
    ### * [contributing](#contributing)
    ### * [test](#test)
    ### * [questions](#questions)
    ${contents}
    ### installation
    ${installation}
    #### usage
    ${usage}
    ##### license
    this application is covered by ${license}
    ###### contributing
    ${contributing}
    ####### test
    ${test}
    ######## questions 
    ${questions}
    * Github:${git}`;

    createNewFile(description,markDown);
    
}
);


function createNewFile(fileName, data){
   
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data,(err)=>{
        if(err){
            console.log(err);
        }
        console.log('the file has been created');
})
}