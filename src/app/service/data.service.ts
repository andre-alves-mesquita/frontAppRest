import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get('http://localhost:8000/api/employees');
  }

  insertData(data: any) {
    return this.httpClient.post('http://localhost:8000/api/employee', data);
  }

  deleteData(id: any) {
    return this.httpClient.delete(
      'http://localhost:8000/api/deleteEmployee/' + id
    );
  }

  getEmployeeById(id: any) {
    return this.httpClient.get('http://localhost:8000/api/employees/' + id);
  }

  updateData(id: any, data: any) {
    return this.httpClient.put(
      'http://localhost:8000/api/updateEmployee/' + id,
      data
    );
  }
}
