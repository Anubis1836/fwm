import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']

})
export class RegistrationComponent implements OnInit {
  itemForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private httpService: HttpService, private router: Router) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: [null, Validators.required],
      username: ['', Validators.required]
    });
  }

  register() {
    if (this.itemForm.invalid) return;

    // Ensure role matches backend format
    const formValue = {
      ...this.itemForm.value,
      role: this.itemForm.value.role.toUpperCase()
    };

    this.httpService.registerUser(formValue).subscribe({
      next: () => {
        this.successMessage = 'Registration successful. Redirecting to login...';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: () => (this.errorMessage = 'Failed to register user')
    });
  }
}
