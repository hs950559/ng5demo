import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  rememberMe = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user) {
    console.log('Create account', user);
  }

  loginUser(user) {
    console.log('Login', user, this.rememberMe);
  }
}
