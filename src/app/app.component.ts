import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(DynamicComponent);
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Updated ' + component.instance.title;
    component.instance.submitted.subscribe(this.loginUser);
  }

  loginUser(user) {
    console.log('Login', user);
  }
}
