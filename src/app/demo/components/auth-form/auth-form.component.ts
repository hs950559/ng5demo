import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {

  @Output() submitted: EventEmitter<any> = new EventEmitter();

  onSubmit(value) {
    this.submitted.emit(value);
  }

}
