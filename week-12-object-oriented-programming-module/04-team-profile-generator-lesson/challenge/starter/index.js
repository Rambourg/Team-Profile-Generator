// import { start } from "repl";
// import Employee from "./lib/Employee";

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js")
;


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// let team = [];
// startProgram(); {
//    team.push (new employee("ferf"));
//    team.push (new engineer("ferfrrf"));
//    team.push (new intern(""));
//    team.push ( new Manager(""));

//    let htmlDoc = render(team);

//    await fs.writeFile(outputPath, htmlDoc);
// };




// array of questions for user
const questionsManager = [
     
    { message: "What is your name?",
      name: 'managerName',
   },

   { message: "What is your email address?",
   name: 'managerEmail',
},


   { message: "What is your ID number?",
      name: 'managerId',
   },

   { message: "What is your office number?",
      name: 'managerNumber',


   },

];

const generalQuestion = [ { message: `Would you like to add an engineer details press 1, 
press 2 to add an intern
press 3 to finish building the team?`,
   name: 'options',
},
] 

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


// promptUser()
//   .then((team) => writeFileAsync('index.html', generateHTML(team)))
//   .then(() => console.log('Successfully wrote to index.html'))
//   .catch((err) => console.error(err));
 


// function call to initialize program
async function init() {
    inquirer.prompt(questionsManager)
  .then((inquirerResponse) => { 

   console.log(inquirerResponse);
   
   const managerObj = new Manager(inquirerResponse.managerName,inquirerResponse.managerId,inquirerResponse.managerEmail, inquirerResponse.managerNumber);
  
   // while (true) { 
      inquirer.prompt (generalQuestion) 

      .then ((inquirerOptions)=>{ 
         const option = inquirerOptions.options;

      
         console.log(option);

         inquirer.prompt ( questionsEngineer)


         .then ((inquirerOptions)=>{ 
            const option = inquirerOptions.options;
   
            console.log(option);
   
          
         })
         inquirer.prompt (questionsIntern) 

         .then ((inquirerOptions)=>{ 
            const option = inquirerOptions.options;
   
            console.log(option);
   
         
   
         })

         
       

      })
   
   // }
 
  })
  .catch((err) => {
      console.log(err);
  })
   
  };
 


init();

