import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: FormGroup;

  constructor(private postSer: PostService) { }

  ngOnInit() {

    let title = new FormControl();
    let body = new FormControl();

    this.post = new FormGroup({
      title: title,
      body: body
    })

  }

  onSubmit(post){
    this.postSer.postPost(post).subscribe((res) => {
      console.log(res);
    });
  }

}
