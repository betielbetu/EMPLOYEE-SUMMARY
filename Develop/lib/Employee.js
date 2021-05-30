// TODO: Write code to define and export the Employee class
class Employee {
    role = '';
    
    constructor(name, id, email){
        this.name = name;
        this.email = email;
        this.id = id;
    }

    getRole() {
        return this.role;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getId() {
        return this.id;
    }
}

module.exports = Employee;