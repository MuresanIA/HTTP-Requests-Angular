import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User[];

  private readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.ROOT_URL + '/users').subscribe(users => console.log(users));
  }
  
  getUser(): Observable<User> {
    return this.http.get<User>(this.ROOT_URL + '/users/1')
  }
}
