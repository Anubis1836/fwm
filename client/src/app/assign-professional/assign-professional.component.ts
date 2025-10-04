import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-assign-professional',
  templateUrl: './assign-professional.component.html',
  styleUrls: ['./assign-professional.component.scss']
})
export class AssignProfessionalComponent implements OnInit {
  itemForm!: FormGroup;
  events: any[] = [];
  professionals: any[] = [];
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private httpService: HttpService, public authService: AuthService) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      eventId: [null, Validators.required],
      userId: [null, Validators.required]
    });

    const institutionId = this.authService.getUserId(); // dynamically get logged-in user's ID
    if (!institutionId) {
      this.errorMessage = 'Unable to determine your institution ID';
      return;
    }

    this.loadEvents(institutionId);
    this.loadProfessionals();
  }

  loadEvents(institutionId: string) {
    this.httpService.getEventByInstitutionId(institutionId).subscribe({
      next: res => (this.events = res),
      error: err => {
        console.error(err);
        this.errorMessage = 'Failed to load events';
      }
    });
  }

  loadProfessionals() {
    this.httpService.getAllProfessionals().subscribe({
      next: res => (this.professionals = res),
      error: err => {
        console.error(err);
        this.errorMessage = 'Failed to load professionals';
      }
    });
  }

  submit() {
    if (this.itemForm.invalid) return;

    const { eventId, userId } = this.itemForm.value;
    this.httpService.assignProfessional(eventId, userId).subscribe({
      next: () => (this.successMessage = 'Professional assigned successfully'),
      error: err => {
        console.error(err);
        this.errorMessage = 'Failed to assign professional';
      }
    });
  }
}
