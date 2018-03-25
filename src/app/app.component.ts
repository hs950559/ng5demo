import { Component, AfterContentInit, ViewChild, TemplateRef, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterContentInit {
  @ViewChild('entry', {read: ViewContainerRef}) entry: ViewContainerRef;
  @ViewChild('tmp') tmp: TemplateRef<any>;
  ngAfterContentInit() {
    this.entry.createEmbeddedView(this.tmp);
  }
}
