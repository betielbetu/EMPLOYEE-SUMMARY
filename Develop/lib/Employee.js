// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.email = email;
        this.id = id;
        this.role = 'Employee';
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