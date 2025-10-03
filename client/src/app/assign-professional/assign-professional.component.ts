import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-assign-professional',
  templateUrl: './assign-professional.component.html',
  styleUrls: ['./assign-professional.component.scss']
})
<<<<<<< HEAD
export class AssignProfessionalComponent //doto: complete missing code..
=======
export class AssignProfessionalComponent implements OnInit {
  itemForm!: FormGroup;
  events: any[] = [];
  professionals: any[] = [];
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private httpService: HttpService) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      eventId: [null, Validators.required],
      userId: [null, Validators.required]
    });

    this.loadEvents();
    this.loadProfessionals();
  }

  loadEvents() {
    this.httpService.getEventByInstitutionId(1).subscribe({
      next: res => (this.events = res),
      error: () => (this.errorMessage = 'Failed to load events')
    });
  }

  loadProfessionals() {
    this.httpService.GetAllProfessionals().subscribe({
      next: res => (this.professionals = res),
      error: () => (this.errorMessage = 'Failed to load professionals')
    });
  }

  submit() {
    if (this.itemForm.invalid) return;

    const { eventId, userId } = this.itemForm.value;
    this.httpService.assignProfessionals(eventId, userId).subscribe({
      next: () => (this.successMessage = 'Professional assigned successfully'),
      error: () => (this.errorMessage = 'Failed to assign professional')
    });
  }
}
>>>>>>> ca5246d8c07a0e3e005f03199e1e1eba9d8d8e5f
