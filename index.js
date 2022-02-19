const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const writeHTML = require('./src/writeFile');


let team = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your Manager's name: (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's name!")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter Manager's ID number: (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your Manager's ID number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter Manager's email address: (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Manager's email address!")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "Please enter Manager's office number: (Required)",
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log("Please enter Manager's office number!")
                    return false;
                }
            }
        }
    ]).then(function (answer) {
        team.push(new Manager(answer.name, answer.id, answer.email, answer.officeNumber))
    }).then(employeeQuestion)
}

const employeeQuestion = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'employeeList',
            message: "Please select an option from the list of 'Employees' that you would like to add to your team. Tip: To select all employees simply select 'Finish'",
            choices: ['Manager', 'Engineer', 'Intern', 'Finish']
        }
    ).then(function(answer){
        if(answer.employeeList === 'Engineer'){
            engineerQuestion();
        }else if(answer.employeeList === 'Intern'){
            internQuestion();
        }else if (answer.employeeList === 'Manager'){
            promptUser();
        } else {
            console.log('Team inside employee question');
            return writeHTML(team);
        }
    })
};

const engineerQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your Engineer's name: (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter Engineer's name!")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter your Engineer's ID number: (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your Engineer's ID number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter Engineer's email address: (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter Manager's email address!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter Engineer's GitHub username: (Required)",
            validate: githubInput => {
                if(githubInput) {
                    return true;
                } else {
                    console.log("Please enter Engineer's GitHub username!")
                    return false;
                }
            }
        }
    ]).then(function(answer) {
        team.push(new Engineer(answer.name, answer.id, answer.email, answer.github))
    }).then(employeeQuestion)
};

const internQuestion = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter your Intern's name: (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's name!")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter Intern's ID number: (Required)",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's ID number!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter your Intern's email address: (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's email!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter your Intern's school: (Required)",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter your Intern's school!")
                    return false;
                }
            }
        }
    ]).then(function(answer) {
        team.push(new Intern(answer.name, answer.id, answer.email, answer.school))
    }).then(employeeQuestion)
}

promptUser();

module.exports = team;