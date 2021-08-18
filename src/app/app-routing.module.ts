import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { NgModule } from '@angular/core';
import { EmployeesComponent } from './components/employees/employees.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'edit/:id', component: EmployeeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
