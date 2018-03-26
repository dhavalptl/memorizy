import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Memory } from '../memory-list/memory';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
  @Input() memory: Memory;
  @Output() deleteMemoryHandle = new EventEmitter<Memory>();
  closeResult: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  deleteMemory(){
    this.deleteMemoryHandle.emit(this.memory);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      console.log(result);
      if(result){
        this.deleteMemory();
      }
    });
  }

}
