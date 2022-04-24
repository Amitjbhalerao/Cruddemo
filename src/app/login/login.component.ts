import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private communication: AuthService,
    private fb: FormBuilder
  ) {}
  myForm: any;
  empData: any;
  temp: any;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [''],
      empId: [''],
    });
    this.getCall1();
  }
  onSubmitForm() {
    // this.communication.postData(this.myForm.value).subscribe((res: any) => {
    //   console.log(res);
    //   this.empData = res;
    // });

    console.log(this.myForm.value);
    for (let i = 0; this.empData.length > i; i++) {
      if (
        this.myForm.value.name == this.empData[i].name &&
        this.empData[i].role == 'admin' &&
        this.empData[i].empId == this.myForm.value.empId
      ) {
        localStorage.setItem('userLoggedIn', 'true');
        this.router.navigate(['admin']);
        return alert('Admin logged Successful');
      } else if (
        this.myForm.value.name == this.empData[i].name &&
        this.empData[i].role == 'user' &&
        this.empData[i].empId == this.myForm.value.empId
      ) {
        localStorage.setItem('userLoggedIn', 'true');
        this.router.navigate(['user']);
        return alert('User Logged successful');
      } else {
        localStorage.clear();
      }
    }
  }

  register() {
    this.router.navigate(['form']);
    console.log('hello');
  }
  getCall1() {
    this.communication.getData().subscribe((res: any) => {
      console.log(res);
      this.empData = res;
    });
  }
  navigate() {
    this.router.navigate(['admin']);
  }
}
