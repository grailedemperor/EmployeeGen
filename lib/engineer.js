import Employee from "./employee";
// import renderEngineer from "./src/page-template.js";

class Engineer extends Employee {
    constructor(name, id, email, git){
        super(name, id, email);
        this.git= git;
    }

    getRole(){
        return "Engineer";
    }

    getGit(){
        return this.git;
    }

}

module.exports = Engineer;