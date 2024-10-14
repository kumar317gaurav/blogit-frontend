import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

interface Post{
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
  posts: Post[];
  email: string;

}

// interface User {
//   username: string;
//   email: string;
//   imageUrl: string;
//   posts: Post[];
//   likedPostsCount: number;
// }

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | null =null;

  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe((data) => {
      this.user = data;
    });
  }

  }





