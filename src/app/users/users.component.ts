import { Component, OnInit } from '@angular/core';
import { UsersService } from '../_services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  usersList = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.get_users();
  }

  get_users() {
    this.userService.getUserInfo().subscribe(res => {

      this.usersList = [];

      //  console.log(this.usersList);

      if (res) {
        this.usersList = res['data'];
        console.log(this.usersList);
        
      } err => {
        console.log(err);
      }


    })
  }

}
