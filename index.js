const inquirer = require('inquirer');
const generateHTML = require('./dist/generateHTML')
const Engineer = require('./lib/Engineer')
const fs = require('fs')

let employees = [];

const mainMenu = async () => {
    console.log(employees)
    const answers = await inquirer.prompt([
            // {
            //     type: 'input',
            //     message: "Please enter Manager's name.",
            //     name: 'managerName',
            // },
            // {
            //     type: 'input',
            //     message: "Please enter Manager's employee ID.",
            //     name: 'managerId',
            // },
            // {
            //     type: 'input',
            //     message: "Please enter Manager's email address.",
            //     name: 'managerEmail',
            // },
            // {
            //     type: 'input',
            //     message: "Please enter Manager's office number.",
            //     name: 'managerOffice',
            // },
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


        // .then((answers) => {
        //     const html = generateHTML(answers)
        //     console.log(html)

        //     fs.writeFile('./teamProfile.md', html, error => {
        //         if (error) throw error
        //         console.log('HTML generated!')
        //     })
        // })
        // .catch((error) => {
        //     if (error.isTtyError) {
        //     // Prompt couldn't be rendered in the current environment
        //     } else {
        //     // Something else went wrong
        //     }
        // });
}

mainMenu();

const addEngineer = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            message: "Please enter engineer's name.",
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
            name: 'gitHub',
        },
    ])

    
    let engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub) 
    employees.push(engineer)
    mainMenu()
    
    // if (err) {
    //     console.log(err);
    //   }
    //   console.log('Engineer has been added')
    //   mainMenu()
}

const buildTeam = async () => {
    const html = generateHTML(employees) 
    fs.writeFileSync('./test.html', html)
    // call generateHTML and pass employee array 
    // save HTML into file
    process.exit() 
}