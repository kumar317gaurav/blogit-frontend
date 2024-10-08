import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  constructor(private authService: AuthService) { }

  onSubmit() {
    console.log('User data:', this.user);
    this.authService.signup(this.user).subscribe(response => {
      console.log('User signed up successfully!', response);
    }, error => {
      console.error('Error signing up user', error);
    });
  }
}
