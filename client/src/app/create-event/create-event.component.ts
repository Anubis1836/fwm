import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  itemForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private httpService: HttpService,public authService:AuthService) { }

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      title: [undefined, [Validators.required]],
      schedule: [undefined, [Validators.required]],
      location: [undefined, [Validators.required]],
      status: [undefined, [Validators.required]],
      description: [undefined, [Validators.required]],
      institutionId: [null]
    });
  
    // Automatically set institutionId from logged-in user
    const userId = this.authService.getUserId(); // make sure AuthService has this
    this.itemForm.patchValue({
      institutionId: userId
    });
  }
  
  submit() {
    if (this.itemForm.invalid) return;
  
    this.httpService.createEvent(this.itemForm.value).subscribe({
      next: () => {
        this.successMessage = 'Event created successfully';
        this.errorMessage = '';
        this.itemForm.reset({ institutionId: this.authService.getUserId() });
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || 'Failed to create event';
        this.successMessage = '';
      }
    });
}
}
