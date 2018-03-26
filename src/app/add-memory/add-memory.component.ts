import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Memory} from '../memory-list/memory';
import {DropdownItem} from '../dropdown/dropdownItem';
@Component({
  selector: 'app-add-memory',
  templateUrl: './add-memory.component.html',
  styleUrls: ['./add-memory.component.scss']
})
export class AddMemoryComponent implements OnInit, OnChanges {
  @Output() addMemoryHandle = new EventEmitter<Memory>();
  memoryForm: FormGroup;
  showList: boolean;
  selectedItem: DropdownItem;
  items: DropdownItem[];
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.showList = false;
    this.selectedItem = {
      label: 'ALL',
      value: 'ALL'
    };
    this.items = [{
      label: 'Test1',
      value: {
        a: 'a',
        b: 'b'
      }
    },{
      label: 'Test2chfghghjvh jnb knnml.mlcvhfg',
      value: 'test2'
    },{
      label: 'AL',
      value: 'test3'
    }];
  }

  ngOnInit() {
    
  }

  createForm(){
    this.memoryForm = this.fb.group({
      name: ['', Validators.required],
      email: [''],
      comments: ['', Validators.required]
    });
  }

  ngOnChanges(){
    console.log("Reset");
    this.memoryForm.reset();
  }

  addMemory(){
    this.addMemoryHandle.emit(this.memoryForm.value);
    this.ngOnChanges();
  }

  revert(){
    this.ngOnChanges();
  }

  onOptionSelect(option: DropdownItem){
    console.log(option);
  }

}
