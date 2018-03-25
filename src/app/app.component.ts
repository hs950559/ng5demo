import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  component: ComponentRef<DynamicComponent>;
  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit() {
    const authFormFactory = this.resolver.resolveComponentFactory(DynamicComponent);
    this.component = this.entry.createComponent(authFormFactory);
    this.component.instance.title = 'Updated ' + this.component.instance.title;
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  loginUser(user) {
    console.log('Login', user);
  }
}
