const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')

let employees = [];

const addManager = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: "Please enter Manager's first name.",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter Manager's employee ID.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter Manager's email address.",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter Manager's office number.",
            name: 'office',
        },
    ])

    let manager = new Manager(answers.name, answers.id, answers.email, answers.office) 

        employees.push(manager)

        mainMenu()
}

const mainMenu = async () => {
    console.log(employees)
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Add an engineer, Add an intern, or finish building your team',
            choices: ['Add an engineer', 'Add an intern', 'finish building your team', 'exit']
        }, 
        ])

        if (answers.menu === 'Add an engineer') {
            addEngineer()
        } else if (answers.menu === 'Add an intern') {
            addIntern()
        } else if (answers.menu === 'finish building your team') {
            buildTeam()
        } else if (answers.menu === 'exit') {
            process.exit(0)
        }
}

const addEngineer = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: "Please enter engineer's first name.",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter engineer's employee ID.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter engineer's email address.",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter engineer's Github username.",
            name: 'github',
        },
    ])

    
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.github) 
    employees.push(engineer)
    mainMenu()
    
    // if (err) {
    //     console.log(err);
    //   }
    //   console.log('Engineer has been added')
    //   mainMenu()
}

const addIntern = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: "Please enter intern's first name.",
            name: 'name',
        },
        {
            type: 'input',
            message: "Please enter intern's employee ID.",
            name: 'id',
        },
        {
            type: 'input',
            message: "Please enter intern's email address.",
            name: 'email',
        },
        {
            type: 'input',
            message: "Please enter intern's school.",
            name: 'school',
        },
    ])
    
    let intern = new Intern(answers.name, answers.id, answers.email, answers.school) 
    employees.push(intern)
    mainMenu()
    
    // if (err) {
    //     console.log(err);
    //   }
    //   console.log('Intern has been added')
    //   mainMenu()
}

const buildTeam = async () => {
    const html = generateHTML(employees) 
    fs.writeFileSync('./dist/test.html', html)
    process.exit() 
}

addManager();

