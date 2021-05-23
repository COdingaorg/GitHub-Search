import { Injectable } from '@angular/core';
import { UserClass } from './user-class';
import { RepoClass } from './repo-class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user!: UserClass;
  repository!: RepoClass;
  repositoryData = [];


  constructor(private http: HttpClient) {
    this.user = new UserClass("", "", 0, 0, 0, "", "");
    this.repository = new RepoClass('', '', '', '', '', 0, 0);
  }
}
