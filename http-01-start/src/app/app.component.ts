import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Post } from './post.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts:Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPost();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{name:string}>(
        'https://ng-mydemo.firebaseio.com/demopost.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.getPost();
  }

  onClearPosts() {
    // Send Http request
  }
  private getPost(){
    this.http.get<{[key:string]:Post}>('https://ng-mydemo.firebaseio.com/demopost.json')
    .pipe(map((resdata)=>{
      const posrtarray=[];
      for(let key in resdata){
        if(resdata.hasOwnProperty(key))
posrtarray.push({...resdata[key],'id':key})
      }
      return posrtarray;
    }))
    .subscribe((posts)=>{
      //console.log(posts[0]);
      this.loadedPosts=posts;
    });
  }
}
