import { Component, OnInit } from '@angular/core';
import{NgForm} from '@angular/forms';
import{EmployeeService} from '../shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( private employeeservice : EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form : NgForm){
    if(form.value.$key == '')
    this.employeeservice.insertEmployee(form.value);
    else
    this.employeeservice.updateEmployee(form.value);
    this.resetForm(form);
  }

  resetForm(form? : NgForm){
    if(form != null)
    form.reset();
    this.employeeservice.selectedEmployee={
      $key : "",
      name : "",
      position : "",
      office : "",
      salary : 0,
    }
  }
  onDelete(form : NgForm){
  if(confirm('are you sour delete the data?')==true){
    this.employeeservice.deleteEmployee(form.value.$key);
    this.resetForm(form);
  }
  }

}
