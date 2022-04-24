import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private communication: AuthService, private router: Router) {}
  public empData: any;

  ngOnInit(): void {
    localStorage.clear();
    this.getcall();
  }
  onEdit(id: any, data: any) {
    this.communication.setMessage(id, data);
    this.router.navigate(['update']);
  }

  onDelete(data1: any) {
    this.communication.deleteData(data1.id).subscribe((res: any) => {
      console.log(res);
    });
    this.getcall();
    console.log(data1);
  }
  getcall() {
    this.communication.getData().subscribe((res) => {
      console.log(res);
      this.empData = res;
    });
  }
}
