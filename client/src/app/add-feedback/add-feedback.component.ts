import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss'],
  providers: [DatePipe]
})
export class AddFeedbackComponent implements OnInit {
  itemForm!: FormGroup;
  events: any[] = [];
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    public authService: AuthService,
    private datePipe: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    const role = this.authService.getRole;
    const userId = Number(this.authService.getUserId());
    if (!role || !userId) {
      this.errorMessage = 'User not logged in.';
      return;
    }

    this.itemForm = this.fb.group({
      eventId: [null, Validators.required],
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      comments: ['', Validators.required],
      date: [this.datePipe.transform(new Date(), 'yyyy-MM-dd')]
    });

    // Load events based on role
    if (role === 'PARTICIPANT') {
      this.httpService.viewAllEvents().subscribe({
        next: res => this.events = res || [],
        error: () => this.errorMessage = 'Failed to load events'
      });
    } else if (role === 'PROFESSIONAL') {
      this.httpService.getEventByProfessional().subscribe({
        next: res => this.events = res || [],
        error: () => this.errorMessage = 'Failed to load events'
      });
    } else if (role === 'INSTITUTION') {
      this.httpService.getEventByInstitutionId(userId).subscribe({
        next: res => this.events = res || [],
        error: () => this.errorMessage = 'Failed to load events'
      });
    }
  }

  submit(): void {
    if (this.itemForm.invalid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      this.successMessage = '';
      return;
    }

    const role = this.authService.getRole;
    const userId = Number(this.authService.getUserId());
    if (!role || !userId) {
      this.errorMessage = 'User not logged in.';
      return;
    }

    const { eventId, rating, comments, date } = this.itemForm.value;
    const payload = { rating, comments, date };

    if (role === 'PARTICIPANT') {
      this.httpService.addFeedbackByParticipant(eventId, userId, payload).subscribe({
        next: () => this.onSuccess(),
        error: () => this.onError()
      });
    } else if (role === 'PROFESSIONAL') {
      this.httpService.addFeedbackByProfessional(eventId, userId, payload).subscribe({
        next: () => this.onSuccess(),
        error: () => this.onError()
      });
    } else {
      this.errorMessage = 'You are not authorized to add feedback.';
    }
  }

  private onSuccess() {
    this.successMessage = 'Feedback submitted successfully.';
    this.errorMessage = '';
    this.itemForm.reset();
    this.itemForm.patchValue({ date: this.datePipe.transform(new Date(), 'yyyy-MM-dd') });
  }

  private onError() {
    this.errorMessage = 'Failed to submit feedback.';
    this.successMessage = '';
  }
}
