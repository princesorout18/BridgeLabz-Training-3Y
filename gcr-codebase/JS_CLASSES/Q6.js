class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary += this.salary * percent / 100;
    }
}

// Creating 5 employees
let employees = [
    new Employee(1, "Amit", "IT", 30000),
    new Employee(2, "Rahul", "HR", 25000),
    new Employee(3, "Priya", "IT", 40000),
    new Employee(4, "Neha", "Sales", 35000),
    new Employee(5, "Rohan", "Marketing", 28000)
];

// Applying 10% bonus
employees.forEach(employee => {
    employee.applyBonus(10);
});

// Display annual salaries
employees.forEach(employee => {
    console.log(
        employee.name,
        "Annual Salary:",
        employee.getAnnualSalary()
    );
});

// Calculate total annual payout
let totalPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Payout:", totalPayout);