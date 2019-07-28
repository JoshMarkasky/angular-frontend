import { Component, OnInit } from '@angular/core';
import { Post } from '../../Models/Post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {

  Post: Post;

  constructor(private postSer: PostService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.showOnePost();

  }

  showOnePost(){
    this.postSer.getOnePost(+this.route.snapshot.params['id']).subscribe(post => {
      this.Post = post;
    })
  }

}
