import { Component, OnInit } from '@angular/core';
import { UserClass } from '../user-class';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.css']
})
export class UserResultsComponent implements OnInit {
  user!:UserClass;
  userRepository:any=[];
  userService!: UserServiceService;

  // constructor(userService:UserServiceService) { 
  //   this.userService = userService
  // }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.userRepository = this.userService.repositoryData
  }

}
