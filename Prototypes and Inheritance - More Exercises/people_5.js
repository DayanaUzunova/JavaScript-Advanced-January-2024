function people() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.task = [];
        }
        work() {
            console.log(this.task[0]);
            this.task.push(this.task.shift());
        }
        collectSalary() {
            let totalSalary = this.salary;
            console.log(`${this.name} received ${totalSalary} this month.`);
        }
    }

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.task = [`${this.name} is working on a simple task.`];
        }
    }

    class Senior extends Employee{
        constructor(name, age){
            super(name, age);
            this.task = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising junior workers.`];
        }
    }

    class Manager extends Employee{
        constructor(name, age){
            super(name, age);
            this.task = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];

            this.dividend = 0;
        }
        collectSalary(){
            let totalSalary = this.salary + this.dividend;
            console.log(`${this.name} received ${totalSalary} this month.`);
        }
    }

    return{
        Employee,
        Junior,
        Senior,
        Manager
    }
}