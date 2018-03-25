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
    const dynamicComponent = this.resolver.resolveComponentFactory(DynamicComponent);
    this.entry.createComponent(dynamicComponent); // default order -1
    this.component = this.entry.createComponent(dynamicComponent, 0);
    this.component.instance.title = 'Updated ' + this.component.instance.title;
    this.component.instance.submitted.subscribe(this.loginUser);
  }

  destroyComponent() {
    this.component.destroy();
  }

  moveComponent() {
    this.entry.move(this.component.hostView, 1);
  }

  loginUser(user) {
    console.log('Login', user);
  }
}
