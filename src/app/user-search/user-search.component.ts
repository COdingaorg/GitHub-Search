import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers:[UserServiceService]

})
export class UserSearchComponent implements OnInit {
 userName:string;
 userServiceService:UserServiceService;

 submitForm(){
   this.userServiceService.getUser(this.userName)
 }
 
    constructor(userServiceService:UserServiceService) { 
      this.userServiceService = userServiceService
    }

  ngOnInit(): void {
  }

}
