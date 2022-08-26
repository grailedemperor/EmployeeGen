import fs from "fs"; 
import inquirer from "inquirer"; 
import path from "path";
import Manager from "./lib/Manager";
import Engineer from ".lib/Engineer";
import Intern from "./lib/Intern";
import render from "./src/page-template.js";

// const team = [render.header(), render.footer()];

const DIST_DIR = path.resolve(__dirname,'dist');
const distPath = path.join(DIST_DIR,'team.html');


const teamMembers = [];
const idArray = [];



console.log(
  '\n Welcome to the team generator!\n Use `npm run reset` to reset the dist/ folder\n'
  );

function appMenu(){
  function createManager(){
    console.log('Please build your team');  
    inquirer
      .prompt([
        { 
          type:'input',
          name: 'managerName',
          message:"What is your team manager's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        { 
          type:'input',
          name: 'managerId',
          message:"What is your team manager's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/)
            if (pass) {
              return true;
            }
            return 'Please enter a number greater than zero';
          },
        },
        {
          type:'input',
          name:'managerEmail',
          message:"What is your team manager's email?",
          validate: (answer) => {
            const pass = answer.match(/\$+@\$+\.\$+/)
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type:'input',
          name:'managerNumber',
          message:"What is your team manager's office number?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/)
            if (pass) {
              return true;
            }
            return 'Please enter a number greater than zero';
          },  
        },
      ])
      .then((answers)=>{
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      })
  }
  
  function createTeam() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "rolesList",
          message: "Which type of team member would you like to add?",
          choices: [
            "Engineer",
            "Intern",
            "None"
          ],
        },
      ])
      .then((userChoice) => {
        switch (userChoice.rolesList) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            buildTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([    
        { 
          type:'input',
          name: 'engineerName',
          message:"What is your engineer's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type:'input',
          name:'engineerId',
          message:"What is your engineer's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/)
            if (pass) {
              if (idArray.includes(answer)){
                return 'This ID is already taken. Please enter a different number.'
              } else{
              return true;
              }
            }
            return 'Please enter a number greater than zero';
          },
        },
        {
          type:'input',
          name:'engineerEmail',
          message:"What is your engineer's email?",  
          validate: (answer) => {
            const pass = answer.match(/\$+@\$+\.\$+/)
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type:'input',
          name:'engineerGit',
          message:"What is your engineer's github username?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },  
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGit
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      });
  }

  function addIntern() {
    inquirer
      .prompt([    
        { 
          type:'input',
          name: 'internName',
          message:"What is your intern's name?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },
        {
          type:'input',
          name:'internId',
          message:"What is your intern's id?",
          validate: (answer) => {
            const pass = answer.match(/^[1-9]\d*$/)
            if (pass) {
              if (idArray.includes(answer)){
                return 'This ID is already taken. Please enter a different number.'
              } else{
              return true;
              }
            }
            return 'Please enter a number greater than zero';
          },
        },
        {
          type:'input',
          name:'internEmail',
          message:"What is your intern's email?",  
          validate: (answer) => {
            const pass = answer.match(/\$+@\$+\.\$+/)
            if (pass) {
              return true;
            }
            return 'Please enter a valid email address.';
          },
        },
        {
          type:'input',
          name:'internSchool',
          message:"What is your intern's school?",
          validate: (answer) => {
            if (answer !== '') {
              return true;
            }
            return 'Please enter at least one character.';
          },
        },  
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.intern
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }
  
  function buildTeam(){
    if(!fs.existsSync(DIST_DIR)){
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(teamMembers),'utf-8');
  }

  createManager();
}

appMenu();
















   