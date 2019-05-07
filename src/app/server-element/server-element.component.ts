import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges , DoCheck , AfterContentInit , AfterContentChecked
  , AfterViewInit, AfterViewChecked{

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: String;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ng on changes called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ng onit called');
  }

  ngDoCheck() {
    console.log('ng do check called');
  }

  ngAfterContentInit() {
    console.log('after content init');
  }

  ngAfterContentChecked(): void {
    console.log('aftercontentchecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

}
