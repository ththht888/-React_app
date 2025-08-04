import { makeAutoObservable } from "mobx";

class EmployeeStore {
  employees = [];

  constructor() {
    makeAutoObservable(this);
  }

  setEmployees(list) {
    this.employees = list;
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  removeEmployee(id) {
    this.employees = this.employees.filter((e) => e.id !== id);
  }

  get employeeCount() {
    return this.employees.length;
  }
}

export const employeeStore = new EmployeeStore();