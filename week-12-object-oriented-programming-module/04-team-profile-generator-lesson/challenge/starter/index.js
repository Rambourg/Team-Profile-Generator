const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// array of questions for user
const questionsManager = [
     
    { message: "What is your name?",
      name: 'managerName',
   },

   { message: "What is your ID number?",
      name: 'managerId',
   },

   { message: "What is your office number?",
      name: 'managerNumber',


   },

   { message: `Would you like to add an engineer details press 1, 
   press 2 to add an intern
   press 3 to finish building the team?`,
      name: 'options',


   },

];


const questionsEngineer =[

    { message: "What is your name?",
    name: 'engineerName',
 },

 { message: "What is your ID?",
 name: 'engineerId',
},

{ message: "What is your email?",
name: 'engineerEmail',
},

{ message: "What is your Github UserName?",
name: 'engineerGithub',
},

];

const questionsIntern =[

    { message: "What is your name?",
    name: 'internName',
 },

 { message: "What is your ID?",
 name: 'internId',
},

{ message: "What is your email?",
name: 'internEmail',
},

{ message: "What is your school?",
name: 'internSchool',
},

]


// function call to initialize program
async function init() {
    inquirer.prompt(questionsManager)
  .then((inquirerResponse) => {   
      
  })
  .catch((err) => {
      console.log(err);
  })
   
  };
 


init();

