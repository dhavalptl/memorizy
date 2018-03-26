import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Memory} from './memory';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class MemoryListService {

  constructor(private http: HttpClient) { }

  getMemories() : Observable<Memory[]>{
    return this.http
    .get<Memory[]>('http://localhost:8080/memories')
    .catch(err => {
      //return Observable.empty<Memory[]>();
      return Observable.throw("Error while loading memories");
    });
  }

  deleteMemory(id: number){
    return this.http.delete('http://localhost:8080/memories/' + id);
  }

  addMemory(memory: Memory): Observable<Memory>{
    return this.http.post<Memory>('http://localhost:8080/memories/',memory)
    .catch(err => {
      return Observable.throw("Error while create memory");
    });
  }

}
