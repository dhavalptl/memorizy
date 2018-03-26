import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownItem } from './dropdownItem';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  private defaultOptionItem: DropdownItem = {
    label: 'ALL',
    value: 'ALL'
  }
  showList: boolean;
  @Input() options: DropdownItem[] = [];
  /*set options(optionItems: DropdownItem[]){
    this.optionItems = optionItems;
  }
  get options(): DropdownItem[]{
    return this.optionItems;
  }*/
  @Input() selectedItem: DropdownItem = this.defaultOptionItem;
  @Output() onOptionSelect = new EventEmitter<DropdownItem>();
  constructor() {
    this.showList = false;
  }

  ngOnInit() {
  }

  onListSelect(selectedItem: DropdownItem){
    this.onOptionSelect.emit(selectedItem);
    this.selectedItem = selectedItem;
  }
}
