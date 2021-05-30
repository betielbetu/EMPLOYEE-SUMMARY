// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, githubAccount){
        super(name, id, email);
        this.role = 'Engineer'
        this.github = githubAccount;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;