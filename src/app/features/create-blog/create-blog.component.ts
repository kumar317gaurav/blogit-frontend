import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent implements OnInit {
  
  posts_created={
    title: '',
    content: '',
    category: {
      id: 1
    },
    image: '', 
    categories: []
  }

  categories!: [{
    id: number,
    name: string
  }];


  constructor(
    private http:HttpClient,
    private authService:AuthService
  ){}

  ngOnInit(): void {
    this.fetchCategories();
  }
  fetchCategories() {
    this.http.get('http://localhost:8080/api/categories/all').subscribe(
      (response: any) => {
        console.log(response);
        
        this.categories = response;
      }
    )
  }

  image: string | ArrayBuffer | null | undefined;
  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.image = e.target?.result; 
        };
        reader.readAsDataURL(input.files[0]);
    }
}

  onSubmit() {

    //logging to the console to check if process is successful
    const blogData = {
      title: this.posts_created.title,
      content: this.posts_created.content,
      category: {
        id: this.posts_created.category.id
      },
      image: this.posts_created.image
    }
    console.log('Blog Data:', blogData);

    //sending data of the create-blog to db,json in posts_created
    this.authService.createblog(this.posts_created).subscribe((response: any) => {
      console.log('Post created successfully', response);
    }, (error: any) => {
      console.error('There was en error creating the blog post', error);
    });
};


}


