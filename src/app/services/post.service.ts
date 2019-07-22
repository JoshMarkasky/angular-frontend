import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getOnePost():Observable<any>{
    return this.httpClient.get('http://localhost:8080/getOnePost');
  }

}
