import {  Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  
  templateUrl: './searchBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent {   

  @Output()
  public onValue = new EventEmitter<string>();

  @Input()
  public placeholder: string = '';

  emitValue(value:string):void {
    this.onValue.emit(value);
  }
}
