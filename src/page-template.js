const render = (teamMembers) => {

const renderHeader = ({managerName}) =>
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${managerName}'s Team)</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">${managerName}'s Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
         <div class="team-area col-12 d-flex justify-content-center">
`;
const renderManager = ({managerName, managerId, managerEmail, managerNumber}) =>
`
          <div class="card employee-card">
            <div class="card-header">
               <h2 class="card-title">${managerName}</h2>
               <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${managerId} </li>
                    <li class="list-group-item">Email: ${managerEmail}</li>
                    <li class="list-group-item">Office Number: ${managerNumber}</li>
                </ul>
            </div>
          </div>
`;
const renderEngineer = ({engineerName, engineerId, engineerEmail, engineerGit}) =>
`
           <div class="card employee-card">
            <div class="card-header">
               <h2 class="card-title">${engineerName}</h2>
               <h3 class="card-title"><i class="fas fa-screwdriver mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineerId} </li>
                    <li class="list-group-item">Email: ${engineerEmail}</li>
                    <li class="list-group-item">GitHub: https://github.com/${engineerGit}/</li>
                </ul>
            </div>
          </div>
`;
const renderIntern = ({internName, internId, internEmail, internSchool}) =>
`
           <div class="card employee-card">
            <div class="card-header">
               <h2 class="card-title">${internName}</h2>
               <h3 class="card-title"><i class="fas fa-university mr-2"></i>Intern</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${internId} </li>
                    <li class="list-group-item">Email: ${internEmail}</li>
                    <li class="list-group-item">School: ${internSchool}</li>
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
renderHeader();
renderManager();
renderEngineer();
renderIntern();
renderFooter();
};

module.exports = {
    header: renderHeader,
    manager: renderManager,
    engineer: renderEngineer,
    intern: renderIntern,
    footer: renderFooter,
}