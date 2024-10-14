import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      console.log('Login attempt with email:', email, 'and password:', password);

      this.authService.login({ email, password }).subscribe({
        next: (response) => {
          const { jwtToken, user } = response;

          if (jwtToken) {
            localStorage.setItem('jwtToken', jwtToken);
            localStorage.setItem('user', JSON.stringify(user));
            this.router.navigate(['/']);
          } else {
            this.errorMessage = 'Login failed. No token received.';
          }
        },
        error: (error) => {
          this.errorMessage = 'Login failed. Please check your credentials.';
          console.error('Login error:', error);
        }
      });
    }
  }
}


