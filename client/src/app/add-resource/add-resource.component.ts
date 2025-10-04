import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {
  itemForm!: FormGroup;
  events: any[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private httpService: HttpService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      eventId: [null, Validators.required],
      type: [undefined, Validators.required],
      description: [undefined, Validators.required],
      availabilityStatus: [null, Validators.required]
    });

    this.loadEvents();
  }

  loadEvents() {
    const instId = Number(this.authService.getUserId());
    if (!instId) {
      this.errorMessage = 'Cannot load events: Institution not logged in';
      return;
    }

    this.httpService.getEventByInstitutionId(instId).subscribe({
      next: (res: any) => (this.events = res),
      error: () => (this.errorMessage = 'Failed to load events')
    });
  }

  submit() {
    if (this.itemForm.invalid) return;

    this.httpService.addResource(this.itemForm.value).subscribe({
      next: () => (this.successMessage = 'Resource added successfully'),
      error: () => (this.errorMessage = 'Failed to add resource')
    });
  }
}





