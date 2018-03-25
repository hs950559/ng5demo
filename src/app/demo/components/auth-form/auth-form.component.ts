import { Component, Output, EventEmitter, AfterContentInit, AfterViewInit, ViewChild, ContentChild } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AuthMessageComponent } from '../auth-message/auth-message.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  showMessage = false;
  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  onSubmit(value) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 30;
    }
    if (this.remember) {
      this.remember.checked.subscribe((val: boolean) => {
        this.showMessage = val;
      });
    }
  }

}
