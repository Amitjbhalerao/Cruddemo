import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor(
    private communication: AuthService,
    private fb: FormBuilder,
    private route: Router
  ) {}
  empData: any;
  myForm: any;
  isSubmitted: any = false;
  ngOnInit(): void {
    this.communication.getMessage().subscribe((res: any) => {
      console.log(res);
      this.empData = res;
    });

    this.myForm = this.fb.group({
      name: [this.empData.name],
      age: [this.empData.age],
      empId: [this.empData.empId],
      branch: [this.empData.branch],
      role: [this.empData.role],
    });
  }
  onSubmitForm() {
    console.log(this.myForm.value);
    this.communication
      .editData(this.empData.id, this.myForm.value)
      .subscribe((res: any) => {
        console.log(res);
      });
    this.isSubmitted = true;
    alert('Changes Saved Successful');

    this.route.navigate(['login']);
  }
  backlog() {
    this.route.navigate(['login']);
  }
}
