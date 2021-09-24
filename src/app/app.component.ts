import { Component } from '@angular/core';
import { Post } from './post';
import { Observable, pipe, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, retry  } from 'rxjs/operators';
import { User } from './interface/user';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  // posts: Observable<any>;
  // newPost: Observable<any>;
  // user: User[];

  // constructor(private http: HttpClient) {}

  // getPosts() {
  //   let params = new HttpParams().set('userId', '1');
  //   let headers = new HttpHeaders().set('Authorization', 'auth-token');
  //   this.posts = this.http.get(this.ROOT_URL + '/posts', { params, headers });
  // }

  // createPost() {
  //   const data: Post = {
  //     id: null,
  //     userId: 23,
  //     title: 'First Post',
  //     body: 'Test Message',
  //   };
  //   this.newPost = this.http
  //     .post<Post>(this.ROOT_URL + '/foo', data)
  //     .pipe(
  //       retry(3),
  //       catchError(err => {
  //         console.log(err)
  //         return of(err);
  //       })
  //     )
  // }
}
