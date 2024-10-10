import { Component,Input} from '@angular/core';
import { BlogService } from '../../services/blog.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
   categories = [
    "Music",
    "Technology",
    "Sports",
    "Education",
    "Travel",
    "Health",
    "Business"
]
}
