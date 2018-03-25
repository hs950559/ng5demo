import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo/demo.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthRememberComponent } from './components/auth-remember/auth-remember.component';
import { FormsModule } from '@angular/forms';
import { AuthMessageComponent } from './components/auth-message/auth-message.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    DemoRoutingModule
  ],
  declarations: [DemoComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent]
})
export class DemoModule { }
