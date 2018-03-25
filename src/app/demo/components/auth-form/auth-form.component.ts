import { Component, Output, EventEmitter,
  AfterContentInit,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  ContentChild,
  QueryList,
  ChangeDetectorRef,
  ElementRef,
  Renderer2
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
  @ViewChild('email') email: ElementRef;
  @ViewChildren(AuthMessageComponent) message: QueryList<AuthMessageComponent>;
  @ContentChild(AuthRememberComponent) remember: AuthRememberComponent;
  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor(private cd: ChangeDetectorRef, private renderer: Renderer2) {}
  onSubmit(value) {
    this.submitted.emit(value);
  }

  ngAfterViewInit() {
    const email = this.email.nativeElement;
    this.renderer.setAttribute(email, 'placeholder', 'Enter your email address');
    this.renderer.addClass(email, 'email');
    this.renderer.selectRootElement(email).focus();
    // this.email.nativeElement.setAttribute('placeholder', 'Enter your email address');
    // this.email.nativeElement.classList.add('email');
    // this.email.nativeElement.focus();
    if (this.message) {
      this.message.forEach(message => {
        message.days = 30;
      });
      this.cd.detectChanges();
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
