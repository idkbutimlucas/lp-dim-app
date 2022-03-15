import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/core/models/student';

@Injectable()
export class StudentService {
  constructor(private _httpclient: HttpClient) {}
  get(): Observable<Student[]> {
    return this._httpclient.get<Student[]>(
      `$(environment.apiBaseUrl)&(this.studentPath)`
    );
  }
}
