import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/User';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-show-all-users',
  templateUrl: './show-all-users.component.html',
  styleUrls: ['./show-all-users.component.css']
})
export class ShowAllUsersComponent implements OnInit {

  Users: User[];

  constructor(private userSer: UsersService) { }

  ngOnInit() {

    this.showAllUsers();

  }

  showAllUsers(){
    this.userSer.getAllUser().subscribe(users => {
      this.Users = users;
    })
  }

}
