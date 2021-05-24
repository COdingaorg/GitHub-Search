import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserClass } from './user-class';
import { RepoClass } from './repo-class';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user: UserClass;
  repository: RepoClass;
  repositoryData = [];
  newUserData: any = [];

  constructor(private http: HttpClient) {
    this.user = new UserClass("COdingaorg", 5534613, "Caleb Odinga", 2, 6, "Kenya", "https://api.github.com/users/COdingaorg");
    this.repository = new RepoClass('', '', '', '', '', 0, 0);
  }
  getUser(userName: string) {
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
      this.http.get<ApiResponse>(environment.apiurl + userName + environment.apikey).toPromise().then(Response => {
        this.user.login = Response.login;
        this.user.name = Response.name;
        this.user.id = Response.id;
        this.user.followers = Response.followers;
        this.user.following = Response.following;
        this.user.location = Response.location;
        this.user.url = Response.url;

        resolve()
      },
        error => {
          reject(error)
        })
      //   this.http.get<any>(environment.apiurl + userName + '/repos').toPromise().then(response => {
      //     for (let i = 0; i < response.length; i++) {
      //       this.newUserData = new RepoClass(response[i].name, response[i].html_url, response[i].description, response[i].license, response[i].language, response[i].forks, response[i].watchers)
      //       this.repositoryData.push(this.newUserData)
      //     }

      //     resolve()
      //   },
      //     error => {
      //       reject(error)
      //     })
      // })
      // return promise;
    })
  }
  getRepo(userName: string) {
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<any>(environment.apiurl + userName + '/repos').toPromise().then(response => {
        for (let i = 0; i < response.length; i++) {
          this.newUserData = new RepoClass(response[i].name, response[i].html_url, response[i].description, response[i].license, response[i].language, response[i].forks, response[i].watchers)
          this.repositoryData.push(this.newUserData)
        }
        resolve()
      },
        error => {
          reject(error)
        })
    })
    return promise
  }
}
