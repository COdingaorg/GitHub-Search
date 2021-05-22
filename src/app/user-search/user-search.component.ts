import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  userName!:string;
  searchGithub!: UserServiceService;

  submitName(){
    this.searchGithub.getUserData(this.userName)
  }

  constructor(searchGithub:UserServiceService) {
    this.searchGithub = searchGithub
   }

  ngOnInit(): void {
  }

}
