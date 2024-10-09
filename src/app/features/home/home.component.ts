import { Component } from '@angular/core';
import { Post } from '../../data/post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  blogsList:Post[]=[
    {
      id:1,
      title: "The Wonders of Space",
      image: "/assets/images/img1.jpg",
      desc: "An exploration into the vast mysteries of outer space, from black holes to distant galaxies.",
      date: "2024-08-29",
      author: "Alice Johnson"
  },
  {
      id:2,
      title: "The Rise of AI",
      image: "/assets/images/img1.jpg",
      desc: "How artificial intelligence is transforming industries and our daily lives.",
      date: "2024-08-28",
      author: "Bob Smith"
  },
  {
      id:3,
      title: "Traveling Through Time",
      image: "/assets/images/img1.jpg",
      desc: "A fascinating journey through the concept of time travel and its impact on science fiction.",
      date: "2024-08-27",
      author: "Carol White"
  },
  {
      id:4,
      title: "The Future of Renewable Energy",
      image: "/assets/images/img1.jpg",
      desc: "Innovations and advancements in renewable energy sources that could power the future.",
      date: "2024-08-26",
      author: "David Brown"
  },
  ];
}
