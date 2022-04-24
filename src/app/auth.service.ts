import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public id = new BehaviorSubject(3);
  public data = new BehaviorSubject('');
  public currentID = this.id.asObservable();
  public currentData = this.data.asObservable();

  empData: any;
  check: any;
  admin: any;
  myForm: any;
  constructor(private http: HttpClient, private router: Router) {}
  setMessage(id: any, data: any) {
    this.id.next(id);
    this.data.next(data);
  }
  getMessage() {
    return this.currentID, this.currentData;
  }
  getData() {
    return this.http.get(' http://localhost:3000/api/getAllCourses');
  }

  postData(courses: any) {
    return this.http.post('http://localhost:3000/api/insertCourses', courses);
  }
  editData(id: any, data: any) {
    return this.http.put('http://localhost:3000/api/updateCourses/' + id, data);
  }
  deleteData(id: any) {
    return this.http.delete('http://localhost:3000/api/deleteCourses/' + id);
  }
}
