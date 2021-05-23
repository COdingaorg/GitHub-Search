import { Injectable } from '@angular/core';
import { UserClass } from './user-class';
import { RepoClass } from './repo-class';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  getUserData(userName: string) {
    interface ApiResponse {
      login: string,
      name: string,
      id: number,
      followers: number,
      following: number,
      location: string,
      url: string,
    }

    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>(environment.apiurl + userName).toPromise().then(response => {
        this.user.login = response.login;
        this.user.name = response.name;
        this.user.id = response.id;
        this.user.followers = response.followers;
        this.user.following = response.following;
        this.user.location = response.location;
        this.user.url = response.url;

        resolve()
      }
      )
    })
  }
}
