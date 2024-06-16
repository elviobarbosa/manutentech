import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms"
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  http = inject(HttpClient);
  router = inject(Router);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })

  errorMessage: string | null = null;
  
  onSubmit(): void {
    const {email, username, password} = this.form.getRawValue();
    this.authService.register(
      email, username, password
    ).subscribe(res => {
      if (res.error) {
        this.errorMessage = res.error.message
      } else {
        //this.router.navigateByUrl('/');
      }
    })
  }

}
