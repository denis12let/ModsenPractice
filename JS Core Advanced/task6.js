class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  calcAnnualSalary() {
    const annualSalary = this.salary * 12;

    return annualSalary;
  }
}

class Manager extends Employee {
  bonus = 100;

  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  calcAnnualSalary() {
    const annualSalary = super.calcAnnualSalary();
    const annualSalaryWithBonus = annualSalary + this.bonus * 12;

    return annualSalaryWithBonus;
  }
}

const manager1 = new Manager('Batty', 1000, 'departament1');
const manager2 = new Manager('Barbara', 1100, 'departament2');

console.log(
  `Manager1: \nName: ${manager1.name} \nSalary: ${manager1.salary} \nDepartament: ${
    manager1.department
  } \nAnnualSalary: ${manager1.calcAnnualSalary()} \n`
);
console.log(
  `Manager1: \nName: ${manager2.name} \nSalary: ${manager2.salary} \nDepartament: ${
    manager2.department
  } \nAnnualSalary: ${manager2.calcAnnualSalary()} \n`
);
