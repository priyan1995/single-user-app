import { Component, OnInit } from '@angular/core';
import { AllUsers } from '../_models/users/users.model';
import { UsersService } from '../_services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  all_users: AllUsers;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.get_all_users();
  }

  get_all_users(){
    this.userService.getAllUsers().subscribe(res=>{
      console.log(res['data']);
    })
  }

}
