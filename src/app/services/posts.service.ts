import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  getPostComments(postId) {
      return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId + '/comments');
  }

  getPostById(postId) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + postId);
  }

}
