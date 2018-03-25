import { Component, Output, EventEmitter,
  AfterContentInit,
  AfterViewInit,
  ViewChildren,
  ContentChild,
  QueryList
} from '@angular/core';
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
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  onSubmit(value) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {
    if (this.message) {
      setTimeout(() => {
        this.message.forEach(message => {
          message.days = 30;
        });
      });
    }
  }

  ngAfterContentInit() {

    if (this.remember) {
      this.remember.checked.subscribe((val: boolean) => {
        this.showMessage = val;
      });
    }
  }

}
