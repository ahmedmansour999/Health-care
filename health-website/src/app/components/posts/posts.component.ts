import { Component } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddPostComponent } from '../../add-post/add-post.component';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [ReactiveFormsModule , AddPostComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  post:any;
  error: string = '';

constructor(private posts_servieces:PostsService  ){}
ngOnInit(){


  this.posts_servieces.AllPosts().subscribe(
    (data)=>{
    this.post = data;
    }
  )
}


}
