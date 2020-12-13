import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postsList;
  constructor(public postsService: PostsService, public usersService: UsersService) { }

  getAllPosts() {
      this.postsService.getAllPosts().subscribe(
        posts => {
          this.postsList = posts;
        }, error => {
          console.log(error);
        }, () => {
          this.postsList.forEach(post => {
          this.usersService.getUser(post.userId).subscribe(data => {
            post.user = data;
          });
        });
      });
  }

  getPostComments(post) {
      return this.postsService.getPostComments(post.id).subscribe(comments => {
          post.comments = comments;
      });
  }

  hideComments(post) {
    post.comments = null;
  }

  ngOnInit(): void {
      this.getAllPosts();
  }

}
