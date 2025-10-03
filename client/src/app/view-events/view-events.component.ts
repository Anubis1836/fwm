import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
import { DatePipe } from '@angular/common';

=======
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f

@Component({
  selector: 'app-view-events',
  templateUrl: './view-events.component.html',
<<<<<<< HEAD
  styleUrls: ['./view-events.component.scss'],
  providers: [DatePipe]
})
export class ViewEventsComponent //doto: complete missing code..
=======
  styleUrls: ['./view-events.component.scss']
})
export class ViewEventsComponent implements OnInit {
  /**
   * Collection of events retrieved from the backend. Each event is an object
   * with at least id, title, schedule, and location properties.
   */
  events: any[] = [];

  /**
   * Mapping of event ID to its status string or enrollment result. When the
   * user checks status or enrolls, the result is stored here for display.
   */
  statusResults: { [key: string]: string } = {};

  /** Error message displayed when loading events fails. */
  errorMessage = '';

  constructor(private httpService: HttpService, private authService: AuthService) {}

  ngOnInit(): void {
    // Load all events available to participants. This uses the participant
    // endpoint, but you can replace with a different endpoint if needed.
    this.httpService.viewAllEvents().subscribe({
      next: (res: any) => (this.events = res || []),
      error: () => (this.errorMessage = 'Failed to load events')
    });
  }

  /**
   * Fetches the status of a particular event and stores the result in the
   * statusResults map. If the backend returns an object with a status
   * property, that value is used; otherwise the entire response is shown.
   */
  checkStatus(eventId: any): void {
    this.httpService.viewEventStatus(eventId).subscribe({
      next: (res: any) => {
        const status = res && res.status ? res.status : res;
        this.statusResults[eventId] = status || 'Unknown';
      },
      error: () => {
        this.statusResults[eventId] = 'Error fetching status';
      }
    });
  }

  /**
   * Enrolls the current user in an event. Uses the EnrollParticipant
   * endpoint and stores the response message. Requires the userId to be
   * available in local storage.
   */
  enroll(eventId: any): void {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.statusResults[eventId] = 'User not logged in';
      return;
    }
    this.httpService.EnrollParticipant(eventId, userId).subscribe({
      next: () => {
        this.statusResults[eventId] = 'Enrolled successfully';
      },
      error: () => {
        this.statusResults[eventId] = 'Enrollment failed';
      }
    });
  }
}
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
