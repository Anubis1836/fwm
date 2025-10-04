import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-update-event-status',
  templateUrl: './update-event-status.component.html',
  styleUrls: ['./update-event-status.component.scss']
})
export class UpdateEventStatusComponent implements OnInit {
  itemForm!: FormGroup;
  events: any[] = [];
  statuses: string[] = ['Not Started', 'Ongoing', 'Completed', 'Cancelled'];
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private httpService: HttpService, public authService: AuthService) {}

  ngOnInit(): void {
    if (!['PROFESSIONAL', 'INSTITUTION'].includes(this.authService.getRole || '')) {
      this.errorMessage = 'You are not authorized to update events.';
      return;
    }

    this.itemForm = this.fb.group({
      eventId: [null, Validators.required],
      status: [null, Validators.required]
    });

    const userId = this.authService.getUserId(); // Get logged-in user's ID
    if (!userId) return;

    this.httpService.getEventByProfessional().subscribe({
      next: (res: any) => (this.events = res || []),
      error: () => (this.errorMessage = 'Failed to load events')
    });
  }

  submit(): void {
    if (this.itemForm.invalid) {
      this.errorMessage = 'Please select an event and status.';
      this.successMessage = '';
      return;
    }

    const { eventId, status } = this.itemForm.value;
    this.httpService.updateEventStatus(eventId, status).subscribe({
      next: () => {
        this.successMessage = 'Event status updated successfully.';
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Failed to update event status.';
        this.successMessage = '';
      }
    });
  }
}
