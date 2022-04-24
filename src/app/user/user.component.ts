import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private communication: AuthService) {}
  public empData: any;
  ngOnInit(): void {
    localStorage.clear();
    this.communication.getData().subscribe((res: any) => {
      this.empData = res;
    });
  }
}
