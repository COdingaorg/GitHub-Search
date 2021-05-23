import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { UserClass } from '../user-class';

@Component({
  selector: 'app-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.css']
})
export class UserResultsComponent implements OnInit {
  userHere: UserClass|any;
  userRepoDetails = [];
  userServiceService!: UserServiceService;

  constructor(userServiceService: UserServiceService) {
    this.userServiceService = userServiceService
  }

   ngOnInit(): void {
    this.userHere = this.userServiceService.User;
    this.userRepoDetails= this.userServiceService.repoData;
  }

}
