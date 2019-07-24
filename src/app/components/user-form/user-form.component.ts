import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  User: FormGroup;

  constructor(private userSer: UsersService) { }

  ngOnInit() {

    let username = new FormControl();
    let password = new FormControl();
    let email = new FormControl();

    this.User = new FormGroup({
      username: username,
      password: password,
      email: email
    })

  }

  onSubmit(User){
    this.userSer.postUser(User).subscribe((res) => {
      console.log(res);
    })
  }

}
