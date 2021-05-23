import { Injectable } from '@angular/core';
import { UserClass } from './user-class';
import { RepoClass } from './repo-class';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  User: UserClass;
  userRepo: RepoClass;
  repoUserData:[]|any;
  repoData: []|any;

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
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<ApiResponse>('https://api.github.com/users/' + 'john').toPromise().then(response => {
        this.User.name = response.name,
          this.User.login = response.login,
          this.User.name = response.name,
          this.User.id = response.id,
          this.User.followers = response.followers,
          this.User.following = response.following,
          this.User.location = response.location,
          this.User.url = response.url

          resolve()
      },
        error => {
          reject(error)
        })
      this.http.get<any>('environment.apiurl' + userName + '/repos').toPromise().then(response => {
        for (let i = 0; i < response.length; i++) {
          this.userRepo = new RepoClass(response[i].name, response[i].html_url, response[i].descrition,
            response[i].license, response[i].language, response[i].forks, response[i].watchers);
          this.repoData.push(this.userRepo);
        }
        resolve();
      },
        error => {
          reject(error)
        })
    })
    return promise;
  }
}
