import { Component, Output, EventEmitter, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements AfterContentInit {
  showMessage = false;
  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  onSubmit(value) {
    this.submitted.emit(value);
  }

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach(item => {
        item.checked.subscribe((val: boolean) => {
          this.showMessage = val;
        });
      });
    }
  }

}
