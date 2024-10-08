import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

interface Post {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  date: string;
}

interface User {
  name: string;
  email: string;
  imageUrl: string;
  posts: Post[];
  likedPostsCount: number;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = {
    name: 'Vishwala Sarma',
    email: 'vishwala@example.com',
    imageUrl: 'https://via.placeholder.com/150',
    posts: [],
    likedPostsCount: 5
  };

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.fetchPosts();
  }
deleteBlog(id:any):void{
  this.postService.delete_blog(id).subscribe({
    next:(ress:any)=>{
      console.log("Delete sucess");
    }
  })
}
  fetchPosts(): void {
    this.postService.getPosts().subscribe(posts => this.user.posts = posts);
  }

  editProfile(): void {
    console.log('Edit Profile button clicked');
  }

  

  editPost(index: number): void {
    const post = this.user.posts[index];
    const newTitle = prompt('Edit post title:', post.title);
    const newContent = prompt('Edit post content:', post.content);
    if (newTitle !== null && newContent !== null) {
      const updatedPost = { ...post, title: newTitle, content: newContent };
      this.postService.updatePost(updatedPost).subscribe(updated => {
        this.user.posts[index] = updated;
      });
    }
  }
}




