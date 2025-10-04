import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role: string | null = null;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.role = this.authService.getRole;
  }
}
