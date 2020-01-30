const Employee = require("./Employee");

class Manager extends Employee {
    
    constructor(name, id , email, officeNumber) {
        super(name, id, email);
        // console.log(`Manager constructor: ${name} ${id} ${email} ${officeNumber}`);
        this.officeNumber = officeNumber;  
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){ 
        return this.officeNumber;
    }

    getIcon(){
        return '<i class="fa fa-coffee"></i>';
    }
}

module.exports = Manager;
