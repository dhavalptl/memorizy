import { Component, OnInit, OnDestroy, Input, OnChanges} from '@angular/core';
import { MemoryListService } from './memory-list.service';
import {Subscription} from 'rxjs/Subscription';
import {Memory} from './memory';
@Component({
  selector: 'app-memory-list',
  templateUrl: './memory-list.component.html',
  styleUrls: ['./memory-list.component.scss'],
  providers: [MemoryListService]
})
export class MemoryListComponent implements OnInit, OnDestroy, OnChanges {
  @Input() newMemory: Memory;
  memories: Memory[] = [];
  error: String = '';
  constructor(private memoryService: MemoryListService) {
    this.loadMemories();
  }

  loadMemories(){
    this.memoryService.getMemories()
    .subscribe(
      data => this.memories = data, 
      err => this.error = err
    );
  }

  ngOnInit() {
  }

  ngOnChanges(){
    if(this.newMemory){
      //this.memories.push(this.newMemory);
      this.memoryService.addMemory(this.newMemory).subscribe(
        data => this.memories.push(data),
        err => this.error = err
      );
    }
  }

  deleteMemoryHandle(deleteMemory: Memory){
    const deleteMemoryId = deleteMemory.id;
    this.memories = this.memories.filter(memory => deleteMemoryId !== memory.id);
    this.memoryService.deleteMemory(deleteMemoryId).subscribe();
  }

  ngOnDestroy(){
    
  }

}
