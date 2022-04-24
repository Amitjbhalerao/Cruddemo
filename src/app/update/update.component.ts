import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  constructor(
    private communication: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      name: [''],
      empId: [''],
      age: [''],
      branch: [''],
      role: [''],
    });
  }
  public myForm: any;
  public empData: any;

  ngOnInit(): void {}
  onEdit(id: any, data: any) {
    this.communication.setMessage(id, data);
    this.router.navigate(['update']);
  }

  onDelete(data1: any) {
    this.communication.deleteData(data1.id).subscribe((res: any) => {
      console.log(res);
    });
    this.communication.getData().subscribe((res) => {
      console.log(res);
      this.empData = res;
    });
    console.log(data1);
  }
  onSubmitForm() {
    this.communication.postData(this.myForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.empData = res;
      },
      (err: any) => console.log(err)
    );
    this.communication.getData().subscribe((res) => {
      console.log(res);
      this.empData = res;
    });
    this.router.navigate(['login']);
    alert('Registeration successful');
  }
}
