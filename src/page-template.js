const render = (teamMembers) => { 
    let template = ``;
    template = renderHeader();
    for (var i = 0; i < teamMembers.length; i++ ){
        if (teamMembers[i].getRole() === "Manager" ){
           template += renderManager(teamMembers[i])
        } else if (teamMembers[i].getRole() === "Engineer" ){
            template += renderEngineer(teamMembers[i])
        } else if (teamMembers[i].getRole() === "Intern" ){
            template += renderIntern(teamMembers[i])
        } 
    }
    template += renderFooter();
    return template;
}

const renderHeader = () =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
         <div class="team-area col-12 d-flex justify-content-center">
`;
const renderManager = ( {name, id, email, number} ) =>
`
          <div class="card employee-card">
            <div class="card-header">
               <h2 class="card-title">${name}</h2>
               <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id} </li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">Office Number: ${number}</li>
                </ul>
            </div>
          </div>
`;
const renderEngineer = ({name, id, email, git}) =>
`
           <div class="card employee-card">
            <div class="card-header">
               <h2 class="card-title">${name}</h2>
               <h3 class="card-title"><i class="fas fa-screwdriver mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id} </li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">GitHub: https://github.com/${git}/</li>
                </ul>
            </div>
          </div>
`;
const renderIntern = ({name, id, email, school}) =>
`
           <div class="card employee-card">
            <div class="card-header">
               <h2 class="card-title">${name}</h2>
               <h3 class="card-title"><i class="fas fa-university mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${id} </li>
                    <li class="list-group-item">Email: ${email}</li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
          </div>
`;
const renderFooter = () => 
`
         </div>

        </div>
        
    </div>
    
</body>
</html>

`;

 module.exports = render 



