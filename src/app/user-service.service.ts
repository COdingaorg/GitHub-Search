import { Injectable } from '@angular/core';
import { UserClass } from './user-class';
import { RepoClass } from './repo-class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  User: UserClass;
  userRepo!: RepoClass;
  repoData!: [];

  constructor(private http: HttpClient) {
    this.User = new UserClass("", "", 0, 0, 0, "", "  ");
    this.userRepo = new RepoClass("", "", "", "", "", 0, 0);
  }

  getUserData(userName: string) {
    interface ApiResponse {
      login: string,
      name: string,
      id: number,
      followers: number,
      following: number,
      location: string,
      url: string
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>('environment.apiurl' + userName).toPromise().then(response => {
        this.User.name = response.name,
          this.User.login = response.login,
          this.User.name = response.name,
          this.User.id = response.id,
          this.User.followers = response.followers,
          this.User.following = response.following,
          this.User.location = response.location,
          this.User.url = response.url
      })
    })
  }
}
