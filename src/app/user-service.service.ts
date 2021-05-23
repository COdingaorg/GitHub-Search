import { Injectable } from '@angular/core'; 
import { UserClass } from './user-class';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private HttpClient:HttpClient) {
    
   }
}
