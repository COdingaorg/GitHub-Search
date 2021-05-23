import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  userName: string | any;
  userServiceService!: UserServiceService;

  submitName() {
    this.userServiceService.getUserData(this.userName)
  }
  // constructor(userServiceService: UserServiceService) {
  //   this.userServiceService = userServiceService
  // }



  ngOnInit(): void {
  }

}
