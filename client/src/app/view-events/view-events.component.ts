import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
  styleUrls: ['./view-events.component.scss']
})
export class ViewEventsComponent implements OnInit {
  events: any[] = [];
  statusResults: { [key: string]: string } = {};
  errorMessage = '';
  role: string | null = null;
  userId: number | null = null;

  constructor(private httpService: HttpService, public authService: AuthService) {}

  ngOnInit(): void {
    this.role = this.authService.getRole;
    const id= this.authService.getUserId();
    this.userId=id !== null? Number(id):null

    // Decide which endpoint to call based on role
    if (this.role === 'INSTITUTION') {
      this.httpService.viewInstitutionEvents().subscribe({
        next: (res: any) => (this.events = res || []),
        error: () => (this.errorMessage = 'Failed to load institution events')
      });
    } else {
      this.httpService.viewAllEvents().subscribe({
        next: (res: any) => (this.events = res || []),
        error: () => (this.errorMessage = 'Failed to load events')
      });
    }
  }

  checkStatus(eventId: any): void {
    this.httpService.viewEventStatus(eventId).subscribe({
      next: (res: any) => {
        const status = res?.status || res;
        this.statusResults[eventId] = status || 'Unknown';
      },
      error: () => (this.statusResults[eventId] = 'Error fetching status')
    });
  }

  enroll(eventId: any): void {
    if (!this.userId) {
      this.statusResults[eventId] = 'User not logged in';
      return;
    }
    this.httpService.enrollParticipant(eventId, this.userId).subscribe({
      next: () => (this.statusResults[eventId] = 'Enrolled successfully'),
      error: () => (this.statusResults[eventId] = 'Enrollment failed')
    });
  }
}

