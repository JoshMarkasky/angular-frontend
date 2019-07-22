import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  Post: Post;

  constructor(private postSer: PostService) { }

  ngOnInit() {

    this.showOnePost();

  }

  showOnePost(){
    return this.postSer.getOnePost().subscribe(post => {
      this.Post = post;
    })
  }

}
