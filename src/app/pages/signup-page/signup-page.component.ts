import { Component } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent {
  userName: any;
  userEmail: any;
  userPassword: any;

  submitOnClick = () => {
    console.log(this.userName);
    console.log(this.userEmail);
    console.log(this.userPassword);
  };
}
