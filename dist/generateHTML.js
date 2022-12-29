const generateHTML = (data) => {
    
    const employeesHTML = data.map(employee => {
        return `
        <div>
        <h2>${employee.name}</h2>
        <p>${employee.email}</p>
        </div>
        `
    }).join('')

    console.log(employeesHTML)
    // const {
    //     title, 
    // } = data

    return `
    
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Roster Profile</title>
        </head>
        <body>
            ${employeesHTML}    


        </body>
        </html>
    
    
    
    
    
    
    
    
    
    
    
    `
}

module.exports = generateHTML