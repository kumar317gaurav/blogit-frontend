import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignupComponent {
  onSubmit() {
    console.log('Form submitted!');
  }
}
