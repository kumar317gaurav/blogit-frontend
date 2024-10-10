import { Component } from '@angular/core';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.css'
})
export class CreateBlogComponent {

  title: string = '';
  content: string = '';
  category: string = '';
  image: string | ArrayBuffer | null | undefined = undefined; // Use null as the initial value

  categories: string[] = ['Technology', 'Lifestyle', 'Education', 'Health'];

  // onImageSelected(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   if (input.files) {
  //     this.image = input.files[0];
  //   }
  // }

  onImageSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.image = e.target?.result; // Set the image variable here
        };
        reader.readAsDataURL(input.files[0]);
    }
}

  onSubmit() {
    const blogData = {
      title: this.title,
      content: this.content,
      category: this.category,
      image: this.image
    }
    console.log('Blog Data:', blogData);
};


}


