import { Injectable } from '@angular/core';
import { Post } from '../Models/Post';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getOnePost(id:number):Observable<any>{
    return this.httpClient.get('http://localhost:8080/getOnePost/' + id);
  }

  postPost(post):Observable<any>{
    console.log(post);
    return this.httpClient.post<Post>('http://localhost:8080/postPost', post);
  }

}
