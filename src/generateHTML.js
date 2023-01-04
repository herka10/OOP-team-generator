const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")

const generateHTML = (data) => {
    
    const employeesHTML = data.map(employee => {
        if (employee.getRole() === "Manager") {
            return `
                <div class="col mb-3">
                <div class="card border-dark shadow-lg rounded" style="width: 18rem;">
                    <div class="card-header text-white bg-info">
                        <h2>${employee.name}</h2>
                        <h5>${employee.getRole()}</h5>
                    </div>
                    <div class="card-body">    
                        <p>ID #: ${employee.id}</p>
                        <a href="mailto:${employee.email}">Send Email to ${employee.name}</a> <br>
                        <p>Office #: ${employee.officeNumber}</p>
                    </div> 
                </div>
                </div>
            `
        }

        if (employee.getRole() === "Engineer") {
            return `
                <div class="col mb-3">
                <div class="card border-dark shadow-lg rounded" style="width: 18rem;">
                    <div class="card-header text-white bg-info">
                        <h2>${employee.name}</h2>
                        <h5>${employee.getRole()}</h5>
                    </div>
                    <div class="card-body">
                        <p>ID #: ${employee.id}</p>
                        <a href="mailto:${employee.email}">Send Email to ${employee.name}</a> <br>
                        <a href="https://github.com/${employee.github}">View ${employee.name}'s Github</a>
                    </div> 
                </div>
                </div>
            `
        }

        if (employee.getRole() === "Intern") {
            return `
                <div class="col mb-3">
                <div class="card border-dark shadow-lg rounded" style="width: 18rem;">
                    <div class="card-header text-white bg-info">
                        <h2>${employee.name}</h2>
                        <h5>${employee.getRole()}</h5>
                    </div>
                    <div class="card-body">
                        <p>ID #: ${employee.id}</p>
                        <a href="mailto:${employee.email}">Send Email to ${employee.name}</a> <br>
                        <p>Currently attending ${employee.school}</p>
                    </div> 
                </div>
                </div>
            `
        }
    }).join('')
    
    //console.log(employeesHTML)

    return `
    
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
            <link rel="stylesheet" href="/style.css">
            <title>Team Roster</title>
        </head>
        <body>

            <header class="text-lg-center" style="margin: 10px; border-bottom: double;">
                <h1 style="color: steelblue; font-weight: bold;">Team Roster</h1>
            </header>

            <main class="container">
                <div class="row row-cols-1 row-cols-md-3">
                    ${employeesHTML}    
                </div>
            </main>

            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
        </body>
        </html>
    `
}

module.exports = generateHTML