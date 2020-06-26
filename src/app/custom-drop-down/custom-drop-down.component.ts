import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-custom-drop-down',
  templateUrl: './custom-drop-down.component.html',
  styleUrls: ['./custom-drop-down.component.scss']
})
export class CustomDropDownComponent implements OnInit {

  @Input() dropDownLabel = "";
  @Input() dataOptions: any;
  @Output() onValueSelected: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectionChange(eventElement) {
    this.onValueSelected.emit(eventElement.value);
  }
}
