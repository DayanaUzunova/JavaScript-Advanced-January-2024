class Company{
    constructor(){
        this.department = {};
    }
    addEmployee(name, salary, position, department){
        salary = Number(salary);

        if (!name || !salary || !position || !department){
            throw new Error("Invalid input!");
        }
        else if(salary < 0){
            throw new Error("Invalid input!");
        }
        if(!this.department[department]){
            this.department[department] = {
                avg: 0,
                sumSalary: 0,
                employees: []
            }
        }
        this.department[department].employees.push({name, salary, position});
        this._updateDepartment(department, salary);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let bestDepartmentArr = this._findBestDepartment();
        let buff = `Best Department is: ${bestDepartmentArr[0]}\n`;
        buff += `Average salary: ${bestDepartmentArr[1].avg.toFixed(2)}\n`

        bestDepartmentArr[1].employees.sort((emp1, emp2) => {
            return emp2.salary - emp1.salary || emp1.name.localeCompare(emp2.name)
        }).forEach(emp => buff += `${emp.name} ${emp.salary} ${emp.position}\n`);
        
        return buff.trim();

    }
    _findBestDepartment (){
        return Object.entries(this.department).sort((a, b) => b[1].avg - a[1].avg)[0];
    }
    _updateDepartment(department, salary){
        let currentDepartment = this.department[department];
        currentDepartment.sumSalary += salary;
        currentDepartment.avg = currentDepartment.sumSalary / currentDepartment.employees.length;
    }
}