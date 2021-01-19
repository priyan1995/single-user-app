import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/users/users.model';
import { UsersService } from '../_services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: Users;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.get_users();
  }

  get_users() {
    this.userService.getUserInfo().subscribe(res => {
      //console.log(res);
      //this.users = null;

      if (res) {
        this.users = res['data'];
      }

      // if (res) {
      //   this.usersList = res['data'];
      //   console.log(this.usersList);

      // } err => {
      //   console.log(err);
      // }


    }, err => {
      console.log(err);
    });
  }

}
