const Employee = require("./Employee");

class Intern extends Employee {
    
    constructor(name, id , email, school) {
        super(name, id, email);
        // console.log(`Intern constructor: ${name} ${id} ${email} ${school}`);
        this.school = school;
    }

    getRole(){
        return "Intern";
    }

    getSchool(){ 
        return this.school;
    }
}

module.exports = Intern;
