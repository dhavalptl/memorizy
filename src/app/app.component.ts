import { Component } from '@angular/core';
import {Memory} from './memory-list/memory';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  newMemory: Memory;
  addMemoryHandle(newMemory: Memory){
    this.newMemory = newMemory;
  }
}
