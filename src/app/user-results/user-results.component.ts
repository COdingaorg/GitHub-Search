import { Component, OnInit } from '@angular/core';
import { UserClass } from '../user-class';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.css']
})
export class UserResultsComponent implements OnInit {
  userr: UserClass;
  userRepositories = [];
  userServiceService: UserServiceService;

  constructor(userServiceService: UserServiceService) {
    this.userServiceService = userServiceService
  }

  ngOnInit() {
    this.userr = this.userServiceService.user;
    this.userRepositories = this.userServiceService.repositoryData
  }

}
