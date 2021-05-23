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
  repositoryData:any=[];


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
      },
      error=>{
        reject(error)
      })
      this.http.get<any>(environment.apiurl+userName+'/repo').toPromise().then(response => {
        for(let i=0; i<response.length; i++){
          this.repository = new RepoClass(response[i].name, response[i].html_url,response[i].description,response[i].license,response[i].language,response[i].forks,response[i].watchers)
          this.repositoryData.push(this.repository)
        }

        resolve()
      },
      error=>{
        reject(error)
      })
    })
  }
}
