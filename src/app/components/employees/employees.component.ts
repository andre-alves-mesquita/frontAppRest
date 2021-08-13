import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  employees: any;
  constructor(private DataService: DataService) {}

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData() {
    this.DataService.getData().subscribe((res) => {
      this.employees = res;
    });
  }
}
