import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user1 = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) { }

  onSubmit() {
    console.log('User data:', this.user1);
    this.authService.login(this.user1).subscribe(response => {
      console.log('User logged in successfully!', response);
      // Handle successful login, e.g., navigate to another page
    }, error => {
      console.error('Error logging in user', error);
      // Optionally display an error message to the user
    });
  }
}
