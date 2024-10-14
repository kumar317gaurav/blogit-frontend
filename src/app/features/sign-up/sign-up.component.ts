import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    console.log('User data:', this.user);
    this.authService.signup(this.user).subscribe(response => {
      console.log('User signed up successfully!', response);
      this.router.navigate(["login"]);
    }, error => {
      console.error('Error signing up user', error);
    });
  }
}
