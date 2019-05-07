import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, 
  AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges , DoCheck , AfterContentInit , AfterContentChecked
  , AfterViewInit, AfterViewChecked , OnDestroy {

  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: String;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentPara') contentPara: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ng on changes called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ng onit called');
    console.log('this header' + this.header.nativeElement.textContent);
    console.log('on init' + this.contentPara.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ng do check called');
  }

  ngAfterContentInit() {
    console.log('after content init');
    console.log('after content init' + this.contentPara.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('aftercontentchecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('this header' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ng on destroy');
  }

}
